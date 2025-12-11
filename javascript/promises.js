//pending,fullfilled,rejected//ES6 feature

let promise=new Promise((resolve,reject)=>{
    if(5>10){
        resolve("Resolve");
    }
    else{
        reject("Reject");
    }
});
promise
   .then((resolve)=>console.log(resolve))
   .catch((reject)=>console.log(reject));


//ES8 async & avait

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response);
    let data=response.json();
    return data;
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error));
