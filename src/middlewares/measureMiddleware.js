/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-21:51
 */
const measureMiddleware = () => (next) => (action) => {
  console.log('measureMiddleware', action);
  console.time(action.type);
  next(action);
  console.timeEnd(action.type);
};

export default measureMiddleware;
