/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 19/09/2019-21:30
 */

const persistStore = () => (next) =>
  (reducers, initialState, enhancer) => {

  let store;
  if(typeof initialState !== 'function') {
    store = next(reducers, initialState, enhancer);
  } else {
    const preloadState = initialState ||
      JSON.parse(localStorage.getItem('@persistStore') || {});
    store = next(reducers, preloadState, enhancer);
  }

  const unsubscribe = store.subscribe(() => {
    const storeString = JSON.stringify(store.getState());
    localStorage.setItem('@persistStore', storeString);
  });

  return store;
};


export default persistStore;
