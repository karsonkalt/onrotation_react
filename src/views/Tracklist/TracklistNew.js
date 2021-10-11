import { Component } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  CloseButton,
} from "react-bootstrap";
import {
  MusicNote,
  MusicNoteList,
  Vinyl,
  Person,
  CalendarEvent,
  PlayBtn,
  Clock,
} from "react-bootstrap-icons";
import IconText from "../../layout/global/IconText";
import { connect } from "react-redux";
import { fetchSubmitTracklist } from "../../store/actions/tracklistActions";

class TracklistNew extends Component {
  state = {
    name: "",
    artistName: "",
    datePlayed: "",
    youTubeLink: "",
    tracks: [
      {
        name: "",
        artistName: "",
        labelName: "",
        cueTime: "",
      },
      {
        name: "",
        artistName: "",
        labelName: "",
        cueTime: "",
      },
      {
        name: "",
        artistName: "",
        labelName: "",
        cueTime: "",
      },
    ],
  };

  renderTracks = () => {
    return this.state.tracks.map((track, index) => {
      return (
        <div
          className="mt-3 mb-3 p-3 bg-primary border rounded border-primary d-flex align-items-center "
          style={{ "--bs-bg-opacity": 0.1, color: "#0d6efd" }}
          key={index}
        >
          <h4 className="ms-2 me-4">{index + 1}</h4>

          <div style={{ width: "100%" }}>
            <Row>
              <Col xs={9}>
                <InputGroup
                  className="mb-2"
                  size="sm"
                  onChange={(event) => {
                    this.handleTrackNameChange(event, index);
                  }}
                  value={this.state.tracks[index].name}
                >
                  <InputGroup.Text>
                    <MusicNote />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Track name"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup
                  className="mb-2"
                  size="sm"
                  onChange={(event) => {
                    this.handleTrackCueTimeChange(event, index);
                  }}
                  value={this.state.tracks[index].cueTime}
                >
                  <InputGroup.Text>
                    <Clock />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Cue time"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup
                  className="mb-2"
                  size="sm"
                  onChange={(event) => {
                    this.handleTrackArtistChange(event, index);
                  }}
                  value={this.state.tracks[index].cueTime}
                >
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Artist name"
                  />
                </InputGroup>
              </Col>
              <Col xs={5}>
                <InputGroup
                  className="mb-2"
                  size="sm"
                  onChange={(event) => {
                    this.handleTrackLabelChange(event, index);
                  }}
                  value={this.state.tracks[index].labelName}
                >
                  <InputGroup.Text>
                    <Vinyl />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Label name"
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <CloseButton
            onClick={() => this.handleRemoveTrackClick(index)}
            className="ms-3"
          />
        </div>
      );
    });
  };

  handleRemoveTrackClick = (index) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks.filter((track, tIndex) => tIndex !== index),
      ],
    });
  };

  handleAddTrackClick = (event) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks,
        {
          name: "",
          artistName: "",
          labelName: "",
          cueTime: "",
        },
      ],
    });
  };

  handleTracklistNameChange = (event) => {
    this.setState({
      ...this.state,
      tracks: [...this.state.tracks],
      name: event.target.value,
    });
  };

  handleTracklistArtistChange = (event) => {
    this.setState({
      ...this.state,
      tracks: [...this.state.tracks],
      artistName: event.target.value,
    });
  };

  handleTracklistDatePlayedChange = (event) => {
    this.setState({
      ...this.state,
      tracks: [...this.state.tracks],
      datePlayed: event.target.value,
    });
  };

  handleTracklistLinkChange = (event) => {
    this.setState({
      ...this.state,
      tracks: [...this.state.tracks],
      youTubeLink: event.target.value,
    });
  };

  handleTrackNameChange = (event, index) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks.map((track, tIndex) => {
          if (tIndex === index) {
            return {
              ...track,
              name: event.target.value,
            };
          } else {
            return track;
          }
        }),
      ],
    });
  };

  handleTrackCueTimeChange = (event, index) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks.map((track, tIndex) => {
          if (tIndex === index) {
            return {
              ...track,
              cueTime: event.target.value,
            };
          } else {
            return track;
          }
        }),
      ],
    });
  };

  handleTrackArtistChange = (event, index) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks.map((track, tIndex) => {
          if (tIndex === index) {
            return {
              ...track,
              artistName: event.target.value,
            };
          } else {
            return track;
          }
        }),
      ],
    });
  };

  handleTrackLabelChange = (event, index) => {
    this.setState({
      ...this.state,
      tracks: [
        ...this.state.tracks.map((track, tIndex) => {
          if (tIndex === index) {
            return {
              ...track,
              labelName: event.target.value,
            };
          } else {
            return track;
          }
        }),
      ],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchSubmitTracklist(this.state);
  };

  render() {
    return (
      <>
        <h4>New Tracklist</h4>
        <div
          className="align-items-center justify-content-between "
          style={{ display: "flex" }}
        >
          <Form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <MusicNoteList />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Tracklist name"
                    value={this.state.name}
                    onChange={this.handleTracklistNameChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Artist name"
                    value={this.state.artistName}
                    onChange={this.handleTracklistArtistChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <CalendarEvent />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Date played"
                    value={this.state.datePlayed}
                    onChange={this.handleTracklistDatePlayedChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <PlayBtn />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="YouTube Link"
                    value={this.state.youTubeLink}
                    onChange={this.handleTracklistLinkChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <h4 className="mt-4">Tracks</h4>
            {this.renderTracks()}
            <Button
              variant="outline-primary"
              size="sm"
              className="mt-3"
              onClick={this.handleAddTrackClick}
            >
              <IconText icon="PlusCircleFill" text="Add Track" />
            </Button>
            <Row className="mt-4">
              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  style={{ width: "auto" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmitTracklist: (data) => dispatch(fetchSubmitTracklist(data)),
  };
};

export default connect(null, mapDispatchToProps)(TracklistNew);
