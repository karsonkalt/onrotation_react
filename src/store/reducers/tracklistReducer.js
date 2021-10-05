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
            id: tracklist.id,
            name: tracklist.name,
            artist: tracklist.artist,
            creator: tracklist.creator,
            dateCreated: tracklist.created_at,
            numIdentifiedTracks: tracklist.number_of_identified_tracks,
            numTotalTracks: tracklist.number_of_tracks,
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
