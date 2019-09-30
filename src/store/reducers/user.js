import {
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from "../action_types";
import createReducer from '../../core/createReducer';

const initialState  = {
  loading: false,
  users: []
};

const handlers = {
  /**
   * return all user available
   * @param state
   * @param users
   * @returns {*}
   */
  [FETCH_USERS]: (state, users) => {
    return Object.assign({}, state, {
      users
    });
  },

  /**
   * add new user to list
   * @param state
   * @param newUser
   * @returns {*}
   */
  [ADD_USER]: (state, username) => {
    const newUser = {
      id: state.users[state.users.length - 1].id + 1,
      username
    };
    const newUsers = [...state.users, newUser];
    return Object.assign({}, state, {
      users: newUsers
    });
  },

  /**
   * update user info
   * @param state
   * @param newUser
   * @returns {*}
   */
  [UPDATE_USER]: (state, newUser) => {
    const index = state.users.findIndex(user => newUser.id === user.id);

    return Object.assign({}, state, {
      users: [
        ...state.users.slice(0, index),
        newUser,
        ...state.users.slice(index + 1)
      ]
    });
  },

  /**
   * remove an user by userID
   * @param state
   * @param userId
   * @returns {*}
   */
  [REMOVE_USER]: (state, userId) => {
    return Object.assign({}, state, {
      users: state.users.filter(user => user.id !== userId)
    });
  }
};
export default createReducer(initialState, handlers);
