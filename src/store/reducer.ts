import trackSearch from '../data/track_search';

const initialState: State = {
    results: trackSearch
};

// Le taf d'un reducer, c'est de digérer une action,
// et si elle est considérée valide, de modifier le
// state.
// Dans tous les cas, le reducer doit retourner un
// nouvel objet state.
export default function(state = initialState, action: Action) {
    let newState = {...state};


    return newState;
}
