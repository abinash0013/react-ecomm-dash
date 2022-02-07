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
                        <Link to="/Sdd">Add Product</Link>
                        <Link to="/Update">Update Product</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
