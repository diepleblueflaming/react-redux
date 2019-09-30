/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-22:40
 */

const nullMiddleware = parameter => ({getState, dispatch}) => (next) => (action) => {
  console.log('nullMiddleware', action);
  next(action !== null ? action : {type: parameter || 'UNKNOWN'});
};

export default nullMiddleware;
