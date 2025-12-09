let person={
    fname:"Harry",
    lname:"potter",
    age:10,
    address:{
        city:"chennai",
        pincode:"641002",
    },
}
let personCopy=person;//normal copy
console.log(person);
console.log(personCopy);
person.age=34;
console.log("After modifying age");
console.log(person);
console.log(personCopy);

let personCopy2={...person}//using.. spread operator (shallow copy)
console.log(person);
console.log(personCopy2);
person.address.city="mumbai";
console.log("After modifying city");
console.log(person);
console.log(personCopy2);


let personCopy3=JSON.parse(JSON.stringify(person));//deep copy
console.log(person);
console.log(personCopy3);

//rest operator
function sum(...args){
    let total=0;
    for(let i of args){
        total+=i;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));