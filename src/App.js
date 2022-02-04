import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-bootstrap";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Add from "./Add";
import Update from "./Update";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <h1>E-commerce Dashboard</h1>
                <Routes>
                    <Route path="Add" element={<Add />} />
                </Routes>
                <Routes>
                    <Route path="Update" element={<Update />} />
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
