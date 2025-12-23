const express = require('express');
const app = express();

const PORT = 4000;

const items = [
    { id: 1, itemName: "pen", price: 20 },
    { id: 2, itemName: "notebook", price: 50 }
];

app.use((req,res)=>{
    console.log("ths is a middleware");
    req.currentTime=new Date();
    
});
app.get('/', (req, res) => {
    res.send('Hello, World!');

});

app.get('/api/data', (req, res) => {
    console.log("Current Time:", req.currentTime);
});


app.get('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
