const express=require('express');
const app=express();
const router=express.Router();
const PORT=4000;
app.use((req,res,next)=>{
    console.log("This is a middleware");
    next();
});
router.use((req,res,next)=>{
    console.log("This is router level middleware");
    req.requestTime=new Date();
    next();
});
app.use("/api/v1",router);

app.get("/data",(req,res)=>{
    res.send("Welcome to router level middleware");
});
router.get("/item",(req,res)=>{
    res.send("This is item route");
});
router.get("/fruiets",(req,res)=>{
    res.send(["apple","banana","cherry" ,"mango"]);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
