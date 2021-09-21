import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <Container fluid="xl">
      <NavBar />
      <Home />
    </Container>
  );
}

export default App;
