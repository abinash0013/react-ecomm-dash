import Header from "./Header";
import { useState } from "react";

function Add() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        console.log(name, file, price, description);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        formData.append("price", price);
        formData.append("description", description);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: "POST",
            body: formData,
        });
        alert("Product Add Successfully");
    }

    return (
        <div>
            <Header />
            <br />
            <div className="col-sm-8 offset-sm-2">
                <h1>Add Product</h1>
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <textarea
                    placeholder="Product Description..."
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <button
                    className="btn btn-primary d-block w-100"
                    onClick={addProduct}
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default Add;
