import Header from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/Add");
        }
    }, []);

    return (
        <div>
            <Header />
            <h1>Login Page</h1>
        </div>
    );
}

export default Login;
