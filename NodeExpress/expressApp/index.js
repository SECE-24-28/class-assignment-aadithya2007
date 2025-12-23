const express = require('express');
const app = express();

const PORT = 4000;

const items = [
    { id: 1, itemName: "pen", price: 20 },
    { id: 2, itemName: "notebook", price: 50 }
];

// ✅ Proper middleware
app.use((req, res, next) => {
    console.log("this is a middleware");
    req.currentTime = new Date();
    next(); // 🔥 REQUIRED
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
    console.log("Current Time:", req.currentTime);
    res.json({
        message: "Data received",
        time: req.currentTime
    });
});

app.get('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
