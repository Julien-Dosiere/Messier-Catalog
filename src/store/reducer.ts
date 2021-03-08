import trackSearch from '../data/track_search';
import artistSearch from '../data/artist_search';


const initialState: State = {
    trackResults:{tracks:{items:[]}},
    artistResults:{artists:{items:[]}},
    searchValue: '',
    isLoading: false,
    token:'',
};

// Le taf d'un reducer, c'est de digérer une action,
// et si elle est considérée valide, de modifier le
// state.
// Dans tous les cas, le reducer doit retourner un
// nouvel objet state.
export default function(state = initialState, action: Action) {
    let newState = {...state};
    if (action.type === 'SET_SEARCH_VALUE') {
        newState = {
            ...state,
            searchValue: action.payload.text
        }
    }

    if (action.type === 'SET_TRACKS_RESULT') {
        newState = {
            ...state,
            trackResults: action.payload
        }
    }

    if (action.type === 'SET_ARTISTS_RESULT') {
        newState = {
            ...state,
            artistResults: action.payload
        }
    }

    if (action.type === 'EMPTY_RESULT'){
        newState = {
            ...state,
            trackResults: {tracks:{items:[]}},
            artistResults: {artists:{items:[]}}
        }
    }

    if (action.type === 'SET_TOKEN') {
        newState = {
            ...state,
            token: action.payload.text
        }
    }

    if (action.type === 'LOADING') {
        newState = {
            ...state,
            isLoading: !state.isLoading
        }
    }



    return newState;
}
