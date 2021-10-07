const initialState = {
  tracklist: {},
  loading: true,
};

export default function tracklistShowReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_TRACKLIST":
      return {
        ...state,
        tracklist: { ...state.tracklist },
        loading: true,
      };

    case "ADD_TRACKLIST":
      return {
        ...state,
        tracklist: {
          id: action.payload.id,
          name: action.payload.name,
          artist: action.payload.artist,
          creator: action.payload.creator,
          dateCreated: action.payload.created_at,
          datePlayed: action.payload.date_played,
          numIdentifiedTracks: action.payload.number_of_identified_tracks,
          numTotalTracks: action.payload.number_of_tracks,
          youTubeURL: null,
          tracks: action.payload.tracks,
        },
        loading: false,
      };

    case "DELETE_TRACKLIST":
      return state.filter((tracklist) => tracklist.id !== action.payload.id);

    default:
      return state;
  }
}
