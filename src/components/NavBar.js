import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  Form,
  Button,
  Col,
  NavDropdown,
  Badge,
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar fixed="top" bg="light" className="pl-3 pr-3">
        <Container>
          <Navbar.Brand href="#home">OnRotation</Navbar.Brand>
          <Col xs="auto">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tracklists">Tracklists</Nav.Link>
              <Nav.Link href="#tracks">Tracks</Nav.Link>
            </Nav>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control
                placeholder="Search"
                aria-label="Recipient's username with two button addons"
              />
              <Form.Select
                aria-label="Default select example"
                fluid="auto"
                width="10px"
              >
                <option>Select</option>
                <option value="1">DJs</option>
                <option value="2">Tracklists</option>
                <option value="3">Tracks</option>
              </Form.Select>
              <Nav className="me-auto"></Nav>
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Nav>
              <Nav.Link href="#notifications">
                <Badge bg="primary">10</Badge>
              </Nav.Link>
              <NavDropdown title="Username" className="d-flex flex-row-reverse">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Container>
      </Navbar>
      <div style={{ height: "65px" }} className="spacer"></div>
    </>
  );
}

export default NavBar;
