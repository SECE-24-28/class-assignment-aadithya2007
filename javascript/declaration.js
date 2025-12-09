//var let and const
var a = 10;
var b=a;
a=20;
var a=10;
console.log("a",a);
console.log("b",b);
//problem of var keyword is that it can be reinitialized or redeclared
let c=10;
let d=a;
a=20;
//let d=30;//error
console.log("c",d);
console.log("d",d);
//to avoid er initialization we use const
const pi=3.14;
//pi=3.15; //error