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
  debugger;
  return (dispatch) => {
    fetch("http://localhost:3000/login", config(data))
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "LOGIN",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { fetchLogin };
