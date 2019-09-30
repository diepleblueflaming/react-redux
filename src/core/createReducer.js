"use strict";
/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 28/09/2019-17:31
 */



const createReducer = (initialState, handlers) => {
  return function reducer(state, action) {
    if (state === undefined) {
      state = initialState;
    }

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload);
    }
    return state;
  }
};

export default createReducer;
