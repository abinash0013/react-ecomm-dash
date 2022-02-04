import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto _navbar_warpper">
                        <Link to="/">Dashboard</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
