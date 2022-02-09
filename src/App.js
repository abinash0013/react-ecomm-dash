import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Add from "./Add";
import Update from "./Update";
import Protected from "./Protected";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="Add" element={<Protected Cmp={Add} />} />
                </Routes>
                <Routes>
                    <Route path="Update" element={<Protected Cmp={Update} />} />
                </Routes>
                <Routes>
                    <Route path="Login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
