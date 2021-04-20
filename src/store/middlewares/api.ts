// CP3: Code excerpt - Middleware dealing with data search
import axios from 'axios';
import json from './messier-api-results.json';
export default (store: any) => (next: GenericCallback) => async (action: Action) => {
    // Retrieving datas stored in the state
    const state = store.getState();
    // Defining function dealing with retrieval of datas from API
    const apiSearch = async (searchType: string) => {
        // Clearing out results list
        store.dispatch({type: 'EMPTY_RESULT'});
        // Displaying loading spinner
        store.dispatch({type: 'IS_LOADING'});
        // Retrieving search term
        const searchTerm: string = state.searchValue;
        // Retrieving API token
        const token: string = "Bearer " + state.token;
        try {
            // Connecting to API using token and search term defined above
            store.dispatch({type: 'DETAIL_MODE_OFF'});

            const response: any = await axios
                .get(`https://www.datastro.eu/api/records/1.0/search/?dataset=catalogue-de-messier&q=${searchTerm}&sort=messier`
                    , {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': "application/json"
                    }
                })
            // Hiding loading spinner
            store.dispatch({type: 'IS_NOT_LOADING'});
            // Return datas obtained from API


            const data: Results = response.data;

            console.log(data);
            return data;

        // API error handling
        } catch (error) {
            // Hiding loading spinner
            store.dispatch({type: 'IS_NOT_LOADING'});
            // Logging error
            console.log(error)
            return
        }
    }
    // Execute track search
    if (action.type === 'TRACK_SEARCH') {
        // Using above function to retrieve data from API
        const data: Results | undefined = await apiSearch("track")
        // dispatching storing retrieved datas action
        if (data) {
            store.dispatch({type: 'SET_RESULTS', payload: data});
        }
    }
    // Execute artist search
    if (action.type === 'ARTIST_SEARCH') {
        const data: Results | undefined = await apiSearch("artist")
        // dispatching storing retrieved datas action
        if (data) {
            store.dispatch({type: 'SET_ARTISTS_RESULT', payload: data});
        }
    }
    // proceeding to reducers
    next(action);
}

