"use strict";
/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 29/09/2019-09:08
 */

const createStore = (reducer) => {
  let state;
  let listeners = [];


  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  // purpose of below code is: set initialState from reducer to state.
  dispatch({});

  return {getState, dispatch, subscribe}
};

export default createStore;
