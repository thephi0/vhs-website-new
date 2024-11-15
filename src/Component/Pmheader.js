import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import vhslogo from "../../src/assets1/vhs-lgo.png";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary offerbannerdata_div1">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={vhslogo}
            alt="vhs logo"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="poppins-black mx-3">Vijay Home Services</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center">
            <Nav.Link href="#home" className="poppins-medium">
              {/* For Enterprise */}
            </Nav.Link>
            <Nav.Link href="#link" className="poppins-medium ">
              {/* Delivery Partners */}
            </Nav.Link>
            <Nav.Link href="#link" className="poppins-medium">
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
