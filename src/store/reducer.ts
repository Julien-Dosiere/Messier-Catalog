import trackSearch from '../data/track_search';

const initialState: State = {
    results: trackSearch,
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

    if (action.type === 'SET_RESULT') {
        newState = {
            ...state,
            results: action.payload
        }
    }

    if (action.type === 'EMPTY_RESULT'){
        newState = {
            ...state,
            results: {tracks:{items:[]}}
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
