import TracklistContainer from "../containers/TracklistContainer";
import tracklists from "../data/data";

function Home() {
  return (
    <>
      <h4>Homepage</h4>
      <TracklistContainer />
      {/* <TracklistContainer tracklists={tracklists} /> */}
    </>
  );
}

export default Home;
