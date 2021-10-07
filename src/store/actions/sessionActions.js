const config = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const fetchLogin = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/login", config(data))
      .then((resp) => resp.json())
      .then((json) => {
        if (json.errors) {
          dispatch({
            type: "LOGIN_FAILURE",
          });
        } else {
          dispatch({
            type: "LOGIN",
            payload: json,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { fetchLogin };
