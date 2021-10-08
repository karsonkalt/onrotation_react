const fetchTracklists = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRACKLISTS",
    });
    fetch("http://localhost:3000/tracklists")
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_TRACKLISTS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const fetchTrackTracklists = (id) => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRACKLISTS",
    });
    fetch(`http://localhost:3000/tracks/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_TRACKLISTS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const fetchArtistTracklists = (id) => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRACKLISTS",
    });
    fetch(`http://localhost:3000/artists/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_TRACKLISTS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const fetchTracklist = (id) => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRACKLIST",
    });
    fetch(`http://localhost:3000/tracklists/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_TRACKLIST",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export {
  fetchTracklists,
  fetchTrackTracklists,
  fetchArtistTracklists,
  fetchTracklist,
};
