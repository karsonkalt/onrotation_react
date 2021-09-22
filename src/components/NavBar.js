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
  FloatingLabel,
  OverlayTrigger,
  Popover,
  Card,
  ListGroup,
} from "react-bootstrap";

import { BookmarkFill, MusicNote, MusicNoteList } from "react-bootstrap-icons";

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
              <Form.Select xs="auto" aria-label="Default select example">
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
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover className="shadow-lg">
                      <Popover.Header as="h3">{`Notifications`}</Popover.Header>
                      <Popover.Body style={{ padding: "0" }}>
                        <ListGroup variant="flush">
                          <ListGroup.Item action>
                            <Badge bg="primary">
                              <MusicNote />
                            </Badge>
                            Track 2 on Guy Mantzur Live at Teton's has been ID'd
                          </ListGroup.Item>
                          <ListGroup.Item action>
                            <Badge bg="primary">
                              <MusicNoteList />
                            </Badge>
                            Track 19 on Navar ECHOS 003 has been ID'd
                          </ListGroup.Item>
                          <ListGroup.Item action>
                            <Badge bg="primary">
                              <MusicNoteList />
                            </Badge>
                            Track 1 on Above and Beyond Essential Mix has been
                            ID'd
                          </ListGroup.Item>
                        </ListGroup>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Badge bg="primary">
                    <BookmarkFill />
                    10
                  </Badge>
                </OverlayTrigger>
              </Nav.Link>
              <NavDropdown title="Username" className="d-flex flex-row-reverse">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
