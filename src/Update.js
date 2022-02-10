import Header from "./Header";
// import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function Update(props) {
    console.log("props", props.match.params.id);
    const [data, setData] = useState([]);
    useEffect(async () => {
        let result = await fetch(
            "http://127.0.0.1:8000/api/product/" + props.match.params.id
        );
        result = await result.json();
        setData(result);
    }, []);
    return (
        <div>
            <Header />
            <h1>Update Page</h1>
            <input
                type="text"
                className="form-control"
                defaultValue={data.name}
            />
            <br />
            <img
                type="text"
                className="form-control"
                style={{ width: 50 }}
                src={"http://localhost:8000/" + data.file_path}
            />
            <br />
            <input
                type="text"
                className="form-control"
                defaultValue={data.price}
            />
            <br />
            <input
                type="text"
                className="form-control"
                defaultValue={data.description}
            />
            <br />
            <button className="btn btn-primary d-block w-100">
                Update Product
            </button>
        </div>
    );
}

// export default withRouter(Update);
export default Update;
