import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const history = useHistory;
    const navigate = useNavigate;
    async function signup() {
        let item = { name, email, password };
        console.log(item);
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        // history.push("/add");
        // const navigate = useNavigate();
        navigate("/add");
    }
    // const navigate = useNavigate();
    // navigate("/add");
    return (
        <div className="col-sm-6 offset-sm-3 border-1">
            <h1 className="p-5">Register Page</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Joe Doe"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="joe@demo.com"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <br />
            <input
                type="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <br />
            <button onClick={signup} className="btn btn-primary d-block w-100">
                Signup
            </button>
        </div>
    );
}

export default Register;
