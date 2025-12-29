const userSchema = require("../models/userSchema")

const createUser = async(req,res) => {
    try {
        const response = await userSchema.create(req.body);
        res.status(200).json({
            isError: false,
            message: "User created successfully",
            data: req.body,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User creation failed",
            error: null,
        });
    }
}
const getUsers = async(req,res) => {
    try { 
        const users = await userSchema.find({});
        res.status(200).json({
            isError: false,
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "Fetching users failed",
            error: null,
        });
    }
}
const updateUser= async(req,res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const response = await userSchema.findByIdAndUpdate(userId, updatedData, { new: true });
        res.status(200).json({
            isError: false,
            message: "User updated successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User update failed",
            error: null,
        });
    } 
    
}
const deleteUser = async(req,res) => {
    try {
        const userId = req.params.id;
        const response = await userSchema.findByIdAndDelete(userId);
        res.status(200).json({
            isError: false,
            message: "User deleted successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            isError: true,
            message: "User deletion failed",
            error: null,
        });
    }
  }
module.exports = {createUser, getUsers, updateUser, deleteUser,};