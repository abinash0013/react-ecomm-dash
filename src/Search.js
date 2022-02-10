import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";

function Search() {
    const [data, setData] = useState([]);
    async function SearchProduct(key) {
        let result = await fetch(
            "http://127.0.0.1:8000/api/searchProduct/" + key
        );
        result = await result.json();
        console.log(result);
        setData(result);
    }
    return (
        <div>
            <Header />
            <br />
            <div className="col-sm-8 offset-sm-2">
                <h1>Search Product</h1>
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => {
                        SearchProduct(e.target.value);
                    }}
                />
                <br />
                {data.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Description</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : null}
            </div>
        </div>
    );
}

export default Search;
