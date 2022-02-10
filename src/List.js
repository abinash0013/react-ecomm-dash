import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    async function DeleteProduct(id) {
        let result = await fetch(
            "http://127.0.0.1:8000/api/deleteProduct/" + id,
            {
                method: "DELETE",
            }
        );
        result = await result.JSON();
        console.log(result);
        getData();
    }

    async function UpdateProduct(id) {}

    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/listProduct");
        result = await result.json();
        setData(result);
    }

    return (
        <>
            <Header />
            <br />
            <div className="col-sm-8 offset-sm-2">
                <h1>Product List</h1>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>#</td>
                                <td>
                                    <img
                                        style={{ width: 50 }}
                                        src={
                                            "http://localhost:8000/" +
                                            item.file_path
                                        }
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.description}</td>
                                <td className="td">
                                    <span
                                        className="Delete-Button"
                                        onClick={() => {
                                            DeleteProduct(item.id);
                                        }}
                                    >
                                        Delete
                                    </span>
                                    <Link to={"update/" + item.id}>
                                        <span className="Update-Button">
                                            Update
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default ProductList;
