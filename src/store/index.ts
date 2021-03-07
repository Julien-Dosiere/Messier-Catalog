import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducer';
import apiMW from './middlewares/api';


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        apiMW
    )
);

const store = createStore(
    reducer,
    enhancers
);

export default store;
