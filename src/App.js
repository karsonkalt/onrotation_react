import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./views/Home";
import TracklistIndex from "./views/TracklistIndex";
import TrackIndex from "./views/TrackIndex";
import UserShow from "./views/UserShow";
import Settings from "./views/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Container fluid="xl">
      <NavBar />
      <Row>
        <Col />
        <Col sm={8} m={6} style={{ paddingTop: "85px" }}>
          <Router>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/tracklists" render={() => <TracklistIndex />} />
            <Route exact path="/tracks" render={() => <TrackIndex />} />
            <Route exact path="/profile" render={() => <UserShow />} />
            <Route exact path="/settings" render={() => <Settings />} />
          </Router>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;

{
  /* <Route
  path="/movies"
  render={(routerProps) => (
    <MoviesPage {...routerProps} movies={this.state.movies} />
  )}
/> */
}
