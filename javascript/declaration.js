//var let and const
//var is a functional scope variable
//let and const are block scope variable
console.log(a);//undefined
var a = 10;
var b=a;
a=20;
var a=10;
console.log("a",a);
console.log("b",b);
//problem of var keyword is that it can be reinitialized or redeclared
//console.log(c);//reference error
let c=10;
let d=a;
a=20;
//let d=30;//error
console.log("c",d);
console.log("d",d);
//to avoid er initialization we use const
const pi=3.14;
//pi=3.15; //error

//nested object
let person={
    fname:"Harry",
    lname:"potter",
    age:10,
    address:{
        city:"chennai",
        pincode:"641002",
    },
}
console.log(person);
console.log(person.lname);
console.log(person.address.city);

//destructuring
const {fname,lname,age,address}=person;
const {city,pincode}=address;
console.log(fname);
console.log(city);
console.log(pincode);

