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

class CreateSuggestedTrackIdentificationForm extends Component {
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
          <Form style={{ width: "100%" }}>
            <Row>
              <Col>
                <InputGroup className="mb-2" size="sm">
                  <InputGroup.Text>
                    <MusicNote />
                  </InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Track name"
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
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreateSuggestedTrackIdentificationForm;
