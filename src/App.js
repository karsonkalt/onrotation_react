import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./views/Home";

function App() {
  return (
    <Container fluid="xl">
      <NavBar />
      <Home />
    </Container>
  );
}

export default App;
