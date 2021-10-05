// write and export your action creator function here
export const fetchTracklists = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_TRACKLIST",
    });
    fetch("http://localhost:3000/tracklists")
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_TRACKLISTS",
          payload: json,
        });
      });
  };
};
