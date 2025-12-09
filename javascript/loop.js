var arr=[1,2,3,4,5,6]
for(var i=0;i<6;i++){
    console.log(arr[i]);
}
console.log("_________________")
for(var a of arr){
    console.log(a);
}
console.log("_________________")
for(var a in arr){
    console.log(arr[a]);
}
console.log("_________________")
var person={
    fname:"Harry",
    lname:"potter",
    age:23,
}
for(var a in person){
    console.log(person[a]);
}
console.log("_________________")