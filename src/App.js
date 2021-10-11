import { Container, Row, Col } from "react-bootstrap";

import NavBar from "./layout/NavBar/NavBar";

import Home from "./views/Home";

import TracklistIndex from "./views/Tracklist/TracklistIndex";
import TracklistShow from "./views/Tracklist/TracklistShow";
import TracklistNew from "./views/Tracklist/TracklistNew";

import TrackIndex from "./views/Track/TrackIndex";
import TrackShow from "./views/Track/TrackShow";
import TrackNew from "./views/Track/TrackNew";

import ArtistIndex from "./views/Artist/ArtistIndex";
import ArtistShow from "./views/Artist/ArtistShow";

import UserIndex from "./views/User/UserIndex";
import UserShow from "./views/User/UserShow";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <Container fluid="xl">
        <NavBar />
        <Row>
          <Col />
          <Col sm={8} m={6} style={{ paddingTop: "85px" }}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/tracklists"
                render={(routerProps) => <TracklistIndex {...routerProps} />}
              />
              <Route
                exact
                path="/tracklists/new"
                render={(routerProps) => <TracklistNew {...routerProps} />}
              />
              <Route
                exact
                path="/tracklists/:id"
                render={(routerProps) => <TracklistShow {...routerProps} />}
              />
              <Route
                exact
                path="/tracks"
                render={(routerProps) => <TrackIndex {...routerProps} />}
              />
              <Route
                exact
                path="/tracks/new"
                render={(routerProps) => <TrackNew {...routerProps} />}
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
            </Switch>
          </Col>
          <Col />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
