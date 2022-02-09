import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user-info"));
    console.log(user);
    function logout() {
        localStorage.clear();
        navigate("/register");
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Admin</Navbar.Brand>
                    <Nav className="me-auto _navbar_warpper">
                        <Link to="/">Dashboard</Link>
                        {localStorage.getItem("user-info") ? (
                            <>
                                <Link to="/Add">Add Product</Link>
                                <Link to="/Update">Update Product</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/Register">Register</Link>
                            </>
                        )}
                    </Nav>
                    {localStorage.getItem("user-info") ? (
                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item
                                    className="bg-dark"
                                    onClick={logout}
                                >
                                    Logout
                                </NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark">
                                    Setting
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    ) : null}
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
