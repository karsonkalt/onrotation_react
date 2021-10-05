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
            id: 1,
            name: "Live at UMF Radio",
            datePlayed: "2021-8-25",
            artist: "Guy J",
            creator: "karsonkalt",
            dateCreated: "June 15, 2021",
            numIdentifiedTracks: 12,
            numTotalTracks: 12,
          };
        }),
        loading: false,
      };

    case "ADD_TRACKLIST":
      return {
        ...state,
        tracklists: state.tracklists.concat({
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
