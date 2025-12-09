//named function
function add(a,b){
 return a+b;
}
console.log(add(10,20));
console.log("_____________");
//anonymous function
var product=function(a,b,c){
    return a*b*c;
}
console.log(product(2,3,4));
console.log("_____________");
//IIFE function-Immediate invoked func expression
(function(a,b){
    console.log(b-a);
})(10,20);
console.log("_____________");

//arrow function
var divide=(a,b)=>{
    return a/b;
};

console.log(divide(20,5));
console.log("_____________");


//callback function
function main(callback){
    var sum=30+40;
    console.log("Sum is "+sum);
    callback(sum)
}
function second(num){
    console.log("Hello from second function",num);
}
main(second);
//second();