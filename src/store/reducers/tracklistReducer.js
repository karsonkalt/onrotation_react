import { v4 as uuid } from "uuid";

const initialState = {
  tracklists: [],
  loading: false,
};

export default function tracklistReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "LOADING_TRACKLIST":
      return {
        ...state,
        tracklists: [...state.tracklists],
        loading: true,
      };

    case "ADD_TRACKLISTS":
      return {
        ...state,
        tracklists: action.payload.map((tracklist) => {
          return {
            ...tracklist,
            id: uuid(),
          };
        }),
        loading: false,
      };

    case "ADD_TRACKLIST":
      return {
        ...state,
        tracklists: state.tracklists.concat({
          id: uuid(),
          name: "",
          artist: "",
        }),
        loading: false,
      };

    case "DELETE_TRACKLIST":
      return state.filter((tracklist) => tracklist.id !== action.payload.id);

    default:
      return state;
  }
}
