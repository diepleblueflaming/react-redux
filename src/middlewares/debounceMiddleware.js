/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-22:16
 */
const pendings = {};

const debounceMiddleware = () => (next) => (action) => {
  console.log('debounceMiddleware', action);
  const {debounce} = action.meta || {};

  if (!debounce) {
    return next(action);
  }

  if(pendings[action.type]) {
    clearTimeout(pendings[action.type]);
  }

  pendings[action.type] = setTimeout(
    () => {
      delete pendings[action.type];
      next(action);
    },
    debounce
  );
};

export default debounceMiddleware;
