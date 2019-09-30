import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../store/reducers';
import persistStore from '../store-enhnacers/persistStore';
import middlewares from "../middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  persistStore(),
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, enhancers);
export default store;
