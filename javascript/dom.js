//getElementById
//getElementsByClassName
//getElementsByTagName
//querySelector
//querySelectorAll
let h=document.getElementById("head");
h.innerText="hello world";
h.innerHTML="<i>hello world</i>";
h.style.color="red";
h.style.backgroundColor="yellow";

let items=document.getElementsByClassName("hello");
console.log(items);
items[0].style.color="red";

let ele=document.querySelector("hello");
console.log(ele);
let ele2=document.querySelectorAll(".hello");
console.log(ele2);

let h2Ele=document.createElement("h2");
console.log(h2Ele);
h2Ele.innerText="This is h2 element";
h2Ele.style.color="blue";
document.body.appendChild(h2Ele);   


document.getElementById("container").appendChild(h2Ele);

function hideText(){
    h.style.display="none";
}
function showText(){
    h.style.display="block";
}
function toggleText(){
    if(h.style.display==="none"){
        showText();
    }else{
        hideText();
    }
}

