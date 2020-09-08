import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_({}) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

let store=createStore(rootReducer, {}, enhancer);

export default store;