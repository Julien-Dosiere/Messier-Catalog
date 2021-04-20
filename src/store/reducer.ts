// @ts-ignore
const initialState: State = {
    trackResults:{tracks:{items:[]}},
    artistResults:{artists:{items:[]}},
    results:{records:[]},
    searchValue: '',
    isLoading: false,
    token:'',
    focusObject: 0,
    detailMode: false,
    noResult: false
};


export default function(state = initialState, action: Action) {
    let newState = {...state};
    if (action.type === 'SET_SEARCH_VALUE') {
        newState = {
            ...state,
            searchValue: action.payload.text
        }
    }

    if (action.type === 'DETAIL_MODE_ON') {
        newState = {
            ...state,
            detailMode: true
        }
    }

    if (action.type === 'DETAIL_MODE_OFF') {
        newState = {
            ...state,
            detailMode: false
        }
    }

    if (action.type === 'NO_RESULT_ON') {
        newState = {
            ...state,
            noResult: true
        }
    }

    if (action.type === 'NO_RESULT_OFF') {
        newState = {
            ...state,
            noResult: false
        }
    }

    if (action.type === 'SET_FOCUS_OBJECT') {
        newState = {
            ...state,
            focusObject: action.payload.id
        }
    }
    if (action.type === 'SET_RESULTS') {
        newState = {
            ...state,
            results: action.payload
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
