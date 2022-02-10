import Header from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, []);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
        // alert("user register successfully..");
        navigate("/add");
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
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
                <button
                    onClick={signup}
                    className="btn btn-primary d-block w-100"
                >
                    Signin
                </button>
            </div>
        </>
    );
}

export default Register;
