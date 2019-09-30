import {createStore, applyMiddleware} from 'redux';
import reducers from '../store/reducers';

const store = createStore(reducers);
export default store;
