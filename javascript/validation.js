let submitbtn=document.getElementById("submitbtn");
submitbtn.addEventListener("click",validateForm);

function validateForm(event){
    event.preventDefault();
    let form=document.forms["loginForm"];
    let email=form["email"].value;
    let password=form["password"].value;
    let requiredemail=document.getElementById("requiredemail");
   if (!email) {
    requiredemail.classList.remove("d-none");
    requiredemail.innerText = "Field is required";
    return false;
}
else if (!validateEmail(email)) {
    requiredemail.classList.remove("d-none");
    requiredemail.innerText = "Please enter a valid email";
    return false;
}
else {
    requiredemail.classList.add("d-none");
}

 alert("Form submitted successfully with Email: " + email + " and Password: " + password);
}

function validateEmail(email){
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}