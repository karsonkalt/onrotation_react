import { v4 as uuid } from "uuid";

const initialState = {
  notifications: [],
  loading: false,
};

export default function notificationReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "LOADING_NOTIFICATIONS":
      return {
        notifications: [],
        loading: true,
      };

    case "ADD_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload.map((notification) => {
          return {
            ...notification,
            id: uuid(),
          };
        }),
        loading: false,
      };

    // case "READ_NOTIFICATION":
    //   return {
    //     ...state,
    //     tracklists: state.tracklists.concat({
    //       id: uuid(),
    //       name: "",
    //       artist: "",
    //     }),
    //     loading: false,
    //   };

    default:
      return state;
  }
}
