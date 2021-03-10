import axios from 'axios';

export default (store: any) => (next: GenericCallback) => async (action: Action) => {
    const state = store.getState();
    // Fonction de connexion à l'API et retrait des donnés
    const apiSearch = async (searchType: string) => {
        store.dispatch({type: 'EMPTY_RESULT'})
        store.dispatch({type: 'IS_LOADING'});
        const searchTerm: string = state.searchValue
        const token: string = "Bearer " + state.token
        try {
            const response: any = await axios
                .get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=${searchType}&limit=10&offset=0`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': "application/json",
                        "Authorization": token
                    }
                })
            store.dispatch({type: 'IS_NOT_LOADING'});
            const data: Results = response.data
            return data
        } catch (error) {
            store.dispatch({type: 'IS_NOT_LOADING'});
            console.log(error)
            return
        }
    }
    // Interceptionne l'action envoyé par le composant, exécute la fonction de
    // recherche et sock les résultats dans le store Redux
    if (action.type === 'TRACK_SEARCH') {
        const data: Results | undefined = await apiSearch("track")
        if (data) {
            store.dispatch({type: 'SET_TRACKS_RESULT', payload: data});
        }
    }

    if (action.type === 'ARTIST_SEARCH') {
        const data: Results | undefined = await apiSearch("artist")
        if (data) {
            store.dispatch({type: 'SET_ARTISTS_RESULT', payload: data});
        }
    }

    next(action);
}

