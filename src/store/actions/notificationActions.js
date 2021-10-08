const config = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const fetchNotifications = (userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/notifications`)
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

const fetchReadNotification = (data, userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/notifications`, config(data))
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

export { fetchNotifications, fetchReadNotification };
