const express = require('express'); 
const app = express();
const PORT=5000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.get("/", (req, res) => {    
  res.send("This is third party middleware");
});

app.get("/sum", (req, res) => {
    let sum=0;
    for(let i=0;i<10000000;i++){
        sum+=i;
    }
    res.send(`The sum is ${sum}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});