import React from 'react'

function Registerpage() {
    const[formData, setformData] = React.useState({
        username: "",
        email: "",
        password: ""
    });
    const[errors, seterrors] = React.useState({});
    const handleChanges=(event)=>{
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    const validateForm=()=>{
        let errors={};
        if(!formData.username){
            errors.username="Username is required";
        }
        if(!formData.email){
            errors.email="Email is required";
        }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
            errors.email="Email is invalid";
        }
        if(!formData.password){
            errors.password="Password is required";
        }
        return errors;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const errors=validateForm();
        if(Object.keys(errors).length>0){
            seterrors(errors);
        }else{
            seterrors({});
            setformData({
                username: "",
                email: "",
                password: ""
            });
            alert("Form submitted successfully");
        }
    }
    
  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChanges} />
                <p style={{ color: "red" }}>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChanges} />
                <p style={{ color: "red" }}>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChanges} />
                <p style={{ color: "red" }}>{errors.email}</p>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Registerpage;