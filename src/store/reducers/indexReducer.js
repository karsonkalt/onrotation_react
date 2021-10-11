const initialState = {
  tracklists: [],
  tracks: [],
  loading: true,
};

export default function indexReducer(state = initialState, action) {
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

    case "LOADING_TRACKS":
      return {
        ...state,
        loading: true,
      };

    case "ADD_TRACKS":
      return {
        ...state,
        tracks: action.payload.map((track) => {
          return {
            id: track.id,
            artist: { ...track.artist },
            name: track.name,
            label: { ...track.label },
            dateCreated: track.created_at,
          };
        }),
        loading: false,
      };

    default:
      return state;
  }
}
