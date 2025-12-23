const express = require('express');

const app = express();
const PORT = 6000;

app.use(express.json());

const items = [
    { id: 1, name: "Notebook", price: 100 },
    { id: 2, name: "Eraser", price: 20 },
    { id: 3, name: "Marker", price: 50 },
];

app.get('/items', (req, res) => {
    res.status(200).send(items);
});

app.post('/add-items', (req, res) => {
    console.log(req.body);
    items.push({
        id: items.length + 1,
        name: req.body.name,
        price: req.body.price
    });
    res.status(201).send({items});
});

app.delete("/item/:id", (req, res) => {
    const id = req.params.id;
    const itemIndex = items.findIndex((item) => item.id == id);
    items.splice(itemIndex, 1);
    res.status(200).send("Item Deleted Successfully");


});
app.put("/edit-item/", (req, res) => {
    const [id, name, price] = [req.body.id, req.body.name, req.body.price];
    let idFound = false;
    items.forEach((item) => {
        if (item.id == id) {
            item.name = name;
            item.price = price;
            idFound = true;
        }
        if(idFound){
            res.status(200).send("Item Updated Successfully");}
        else{
            res.status(404).send("Item Not Found");
        }
    });
});


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});