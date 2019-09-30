/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-22:35
 */

const thunkMiddleware = ({getState, dispatch}) => (next) => (action) => {
  if (typeof action === 'function') {
    action({getState, dispatch});
  }else {
    next(action);
  }
};

export default thunkMiddleware;
