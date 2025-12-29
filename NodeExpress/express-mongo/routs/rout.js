const express = require("express");
const { getDB } = require("../config/db");

const router = express.Router();
const empCollection = () => getDB().collection("empData");


router.get("/", async (req, res) => {
    try {
        const employees = await empCollection().find().toArray();
        res.status(200).json({
            isError: false,
            message: "Employee data fetched successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "Failed to fetch employee data"
        });
    }
});


router.post("/add-emp", async (req, res) => {
    try {
        const newEmp = req.body;

        if (!newEmp._id) {
            return res.status(400).json({
                isError: true,
                message: "_id is required"
            });
        }

        await empCollection().insertOne(newEmp);

        res.status(201).json({
            isError: false,
            message: "Employee added successfully"
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "Failed to add employee"
        });
    }
});

router.put("/update-emp/:id", async (req, res) => {
    try {
        const empId = req.params.id;
        const updatedData = req.body;

        const result = await empCollection().updateOne(
            { _id: isNaN(empId) ? empId : Number(empId) },
            { $set: updatedData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                isError: true,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            isError: false,
            message: "Employee updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "Failed to update employee"
        });
    }
});
router.delete("/delete-emp/:id", async (req, res) => {
    try {
        const empId = req.params.id;
        const result = await empCollection().deleteOne(
            { _id: isNaN(empId) ? empId : Number(empId) }
        );

        if (result.deletedCount === 0) {
            return res.status(404).json({
                isError: true,
                message: "Employee not found"
            });
        }
        res.status(200).json({
            isError: false,
            message: "Employee deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "Failed to delete employee"
        });
    }
});  

module.exports = router;
