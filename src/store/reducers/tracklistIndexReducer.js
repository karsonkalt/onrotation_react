const initialState = {
  tracklists: [],
  loading: false,
};

export default function tracklistIndexReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_TRACKLISTS":
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
            datePlayed: tracklist.date_played,
          };
        }),
        loading: false,
      };

    default:
      return state;
  }
}
