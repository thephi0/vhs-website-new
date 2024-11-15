import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import vhslogo from "../../src/assets1/vhs-lgo.png";

function Pheader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-web-header">
      <Container>
        <Navbar.Brand href="/">
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
            {/* <Nav.Link
              href="#home"
              className="poppins-medium text-center ms-auto"
            >
          
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="poppins-medium text-center ms-center"
            >
           
            </Nav.Link> */}

            <Nav.Link
              style={{
                border: "1px solid lightgrey",
                padding: "7px 13px",
                borderRadius: "5px",
              }}
              href="/myorders"
              className="poppins-medium text-end ms-auto"
            >
              My Bookings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Pheader;
