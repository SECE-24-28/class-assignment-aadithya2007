//core modules:http,path,fs,os
const http=require("http");

const server=http.createServer((req,res)=>{
    console.log("Server is created");
    res.write("Hello from the server");
    res.end();
});
server.listen("4000");
