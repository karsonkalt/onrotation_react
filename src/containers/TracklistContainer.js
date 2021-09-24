import { Component } from "react";
import { Container } from "react-bootstrap";
import Tracklist from "../components/Tracklist";

class TracklistContainer extends Component {
  data = [
    {
      name: "Live at UMF Radio",
      datePlayed: "2021-8-25",
      artist: "Guy J",
      creator: "karsonkalt",
      dateCreated: "June 15, 2021",
      numIdentifiedTracks: 12,
      numTotalTracks: 12,
    },
    {
      name: "Live at Stella Polaris Frederiskberg, Denmark",
      datePlayed: "2021-8-7",
      artist: "Guy J",
      creator: "bradbeakes",
      dateCreated: "August 20, 2021",
      numIdentifiedTracks: 23,
      numTotalTracks: 24,
    },
    {
      name: "Lost & Found Presents Echos 043",
      datePlayed: "2021-3-25",
      artist: "Khen",
      creator: "justin",
      dateCreated: "September 23, 2021",
      numIdentifiedTracks: 19,
      numTotalTracks: 21,
    },
    {
      name: "Live at UMF Radio",
      datePlayed: "2021-8-25",
      artist: "Guy J",
      creator: "karsonkalt",
      dateCreated: "June 15, 2021",
      numIdentifiedTracks: 12,
      numTotalTracks: 12,
    },
    {
      name: "Live at Stella Polaris Frederiskberg, Denmark",
      datePlayed: "2021-8-7",
      artist: "Guy J",
      creator: "bradbeakes",
      dateCreated: "August 20, 2021",
      numIdentifiedTracks: 23,
      numTotalTracks: 24,
    },
    {
      name: "Lost & Found Presents Echos 043",
      datePlayed: "2021-3-25",
      artist: "Khen",
      creator: "justin",
      dateCreated: "September 23, 2021",
      numIdentifiedTracks: 17,
      numTotalTracks: 17,
    },
    {
      name: "Live at UMF Radio",
      datePlayed: "2021-8-25",
      artist: "Guy J",
      creator: "karsonkalt",
      dateCreated: "June 15, 2021",
      numIdentifiedTracks: 22,
      numTotalTracks: 23,
    },
    {
      name: "Live at Stella Polaris Frederiskberg, Denmark",
      datePlayed: "2021-8-7",
      artist: "Guy J",
      creator: "bradbeakes",
      dateCreated: "August 20, 2021",
      numIdentifiedTracks: 29,
      numTotalTracks: 31,
    },
    {
      name: "Lost & Found Presents Echos 043",
      datePlayed: "2021-3-25",
      artist: "Khen",
      creator: "justin",
      dateCreated: "September 23, 2021",
      numIdentifiedTracks: 5,
      numTotalTracks: 21,
    },
  ];

  renderTracklists = () => {
    return this.data.map(
      ({
        name,
        artist,
        datePlayed,
        creator,
        dateCreated,
        numIdentifiedTracks,
        numTotalTracks,
      }) => {
        return (
          <Tracklist
            name={name}
            artist={artist}
            datePlayed={datePlayed}
            creator={creator}
            dateCreated={dateCreated}
            numIdentifiedTracks={numIdentifiedTracks}
            numTotalTracks={numTotalTracks}
          />
        );
      }
    );
  };

  render() {
    return this.renderTracklists();
  }
}

export default TracklistContainer;
