import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`v-100`}>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between align-items-center ">
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://maria-belini.ro/wp-content/uploads/2018/03/logo-v22.png"
              alt="Logo"
              height={100}
            />
          </Navbar.Brand>

          <Nav className="">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Rochii">
              Rochii
            </Nav.Link>
          </Nav>

          <Nav className="">
            <Nav.Link as={Link} to="/LogIn">
              Log In
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              Cos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
