import { Alert, Button, Container, Row, Col } from "react-bootstrap";

import NavBar from "./layout/NavBar/NavBar";

import Home from "./views/Home";

import TracklistIndex from "./views/TracklistIndex";
import TracklistShow from "./views/TracklistShow";

import TrackIndex from "./views/TrackIndex";
import TrackShow from "./views/TrackShow";

import ArtistIndex from "./views/ArtistIndex";
import ArtistShow from "./views/ArtistShow";

import UserIndex from "./views/UserIndex";
import UserShow from "./views/UserShow";

import Settings from "./views/Settings";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

function App() {
  return (
    <Container fluid="xl">
      <NavBar />
      <Row>
        <Col />
        <Col sm={8} m={6} style={{ paddingTop: "85px" }}>
          <Router>
            {/* <CSSTransition
              classNames="alert"
              timeout={{ enter: 500, exit: 300 }}
            > */}
            <>
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/tracklists"
                render={(routerProps) => <TracklistIndex {...routerProps} />}
              />
              <Route
                exact
                path="/tracklists/:id"
                render={(routerProps) => <TracklistShow {...routerProps} />}
              />
              <Route
                exact
                path="/tracks"
                render={(routerProps) => (
                  <TrackIndex id={routerProps.match.params.id} />
                )}
              />
              <Route
                exact
                path="/tracks/:id"
                render={(routerProps) => <TrackShow {...routerProps} />}
              />
              <Route
                exact
                path="/artists"
                render={(routerProps) => <ArtistIndex {...routerProps} />}
              />
              <Route
                exact
                path="/artists/:id"
                render={(routerProps) => <ArtistShow {...routerProps} />}
              />
              <Route
                exact
                path="/users"
                render={(routerProps) => <UserIndex {...routerProps} />}
              />
              <Route
                exact
                path="/users/:id"
                render={(routerProps) => <UserShow {...routerProps} />}
              />
              <Route exact path="/settings" render={() => <Settings />} />
            </>
            {/* </CSSTransition> */}
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
