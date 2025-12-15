import React from 'react'
import { useState } from 'react'

function LoginPage() {
    const [formData, setformData] = useState({
        email: "",
        password: ""
    });

    const [errors, seterrors] = useState({});

    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let errorMessage = {};

        if (!formData.email) {
            errorMessage.email = "Email is required";
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            errorMessage.email = "Email is invalid";
        }

        if (!formData.password) {
            errorMessage.password = "Password is required";
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(formData.password)) {
            errorMessage.password = "Password is invalid";
        }

        return errorMessage;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            seterrors(errors);
        } else {
            seterrors({});
            setformData({
                email: "",
                password: ""
            });
            alert("Form submitted successfully");
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email : </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.email}</p>
                </div>

                <div>
                    <label>Password : </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.password}</p>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;
