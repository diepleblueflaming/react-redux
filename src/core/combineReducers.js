"use strict";
/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 29/09/2019-10:42
 */
const combineReducers = (reducers) => {
  return (currentState, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      // Call the corresponding reducer function for a given key
        nextState[key] = reducers[key](
          currentState[key],
          action
        );
        return nextState
      }, {});
  }
};

export default combineReducers;
