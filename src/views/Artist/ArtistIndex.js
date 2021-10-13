import { Component } from "react";

class ArtistIndex extends Component {
  search = () => {
    return this.props.location.search.substring(1);
  };

  render() {
    return (
      <>
        <h4>Artist Index {this.search()}</h4>
      </>
    );
  }
}

export default ArtistIndex;
