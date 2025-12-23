const express=require('express');
const app=express();
const router=express.Router();
const PORT=5000;


app.get("/",(req,res)=>{
   // res.send("This is error handling middleware");
throw Error("this is an forced error")
});
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send({
        isError:true,
        message:err.message
        
    });

});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});