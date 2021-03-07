import axios from 'axios';
import {Store} from "redux";

export default (store: any) => (next: GenericCallback) => (action: Action) => {

    if (action.type === 'MAKE_SEARCH') {
        store.dispatch({ type: 'LOADING'});
        const state = store.getState();
        const searchTerm = state.searchValue
        const token = "Bearer "+state.token
        axios
            .get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=10&offset=0`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': "application/json",
                    "Authorization": token
                }
            })
            .then(response => {
                console.log('RÉPONSE DU SERVEUR:', response);
                if (response.status !== 200) {
                    store.dispatch({ type: 'LOADING'});
                    store.dispatch({ type: 'EMPTY_RESULT'})
                    return
                }

                store.dispatch({ type: 'LOADING'});
                store.dispatch({ type: 'SET_RESULT', payload: response.data});

            })
            .catch(error => {
                store.dispatch({ type: 'LOADING'});
                store.dispatch({ type: 'EMPTY_RESULT'})
                return

            }
    );
        return; // on peut intercepter l'action, qui ne va pas plus loin
    }

    next(action);
}
