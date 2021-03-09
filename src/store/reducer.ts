const initialState: State = {
    trackResults:{tracks:{items:[]}},
    artistResults:{artists:{items:[]}},
    searchValue: '',
    isLoading: false,
    token:'',
};


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

    if (action.type === 'IS_LOADING') {
        newState = {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'IS_NOT_LOADING') {
        newState = {
            ...state,
            isLoading: false
        }
    }



    return newState;
}
