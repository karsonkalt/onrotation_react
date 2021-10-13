import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, onProgress }) => {
  return (
    <div
      className="player-wrapper mb-4 rounded "
      style={{ height: "400px", overflow: "hidden" }}
    >
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        onProgress={onProgress}
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;
