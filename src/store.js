import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from './middleware/logMiddleware';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

let store = createStore(rootReducer,composeWithDevTools(), applyMiddleware(thunk, reduxLogger));

export default store;