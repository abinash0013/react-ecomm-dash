import Header from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/Add");
        }
    }, []);

    async function login() {
        // console.log("data", email, password);
        let item = { email, password };
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/Add");
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3 border-1">
                <h1 className="p-5">Login Page</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="username or email id"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br />
                <button
                    onClick={login}
                    className="btn btn-primary d-block w-100"
                >
                    Login
                </button>
            </div>
        </>
    );
}

export default Login;
