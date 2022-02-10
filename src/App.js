import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import List from "./List";
import Add from "./Add";
import Update from "./Update";
import Protected from "./Protected";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Protected Cmp={List} />} />
                    <Route path="/Add" element={<Protected Cmp={Add} />} />
                    <Route
                        path="/Update/:id"
                        element={<Protected Cmp={Update} />}
                    />
                    <Route
                        path="/search"
                        element={<Protected Cmp={Search} />}
                    />

                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
