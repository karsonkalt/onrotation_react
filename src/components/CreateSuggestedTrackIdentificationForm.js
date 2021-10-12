import { Component } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { MusicNote, Vinyl, Person } from "react-bootstrap-icons";
import IconText from "../layout/global/IconText";
import { connect } from "react-redux";
import { fetchSubmitTrackIdentification } from "../store/actions/tracklistActions";

class CreateSuggestedTrackIdentificationForm extends Component {
  state = {
    name: "",
    artistName: "",
    labelName: "",
  };

  handleNameChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value,
    });
  };

  handleArtistNameChange = (event) => {
    this.setState({
      ...this.state,
      artistName: event.target.value,
    });
  };

  handleLabelNameChange = (event) => {
    this.setState({
      ...this.state,
      labelName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchSubmitTrackIdentification({
      ...this.state,
      tracklistTrackId: this.props.tracklistTrackId,
      userId: this.props.userId,
    });
    this.props.formToggle();
  };

  render() {
    return (
      <div
        className="ms-3 me-3 mb-3 p-3 bg-warning border rounded border-warning "
        style={{ "--bs-bg-opacity": 0.1, color: "#c7941c" }}
      >
        <div
          className="align-items-center justify-content-between "
          style={{ display: "flex" }}
        >
          <Form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
            <Row>
              <h6 className="mb-2">
                <IconText icon="Lightbulb" text="Identify Track" />
              </h6>
              <ul className="ms-4 mb-4">
                <li>
                  Track identifications must include a track and an artist.
                </li>
                <li>If the track is unreleased, leave label blank.</li>
              </ul>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <MusicNote />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Track name"
                    required
                    onChange={this.handleNameChange}
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
                    required
                    onChange={this.handleArtistNameChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <Vinyl />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Label name"
                    onChange={this.handleLabelNameChange}
                  />
                </InputGroup>
              </Col>
            </Row>

            <Button variant="warning" type="submit" size="sm" className="mt-3">
              <IconText icon="CheckCircleFill" text="Submit Identification" />
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmitTrackIdentification: (data) =>
      dispatch(fetchSubmitTrackIdentification(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    userId: state.sessionReducer.userId,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSuggestedTrackIdentificationForm);
