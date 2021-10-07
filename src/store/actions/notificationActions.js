const fetchNotifications = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${1}/notifications`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "ADD_NOTIFICATIONS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { fetchNotifications };
