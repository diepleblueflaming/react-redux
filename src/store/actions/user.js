import {
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../action_types';

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  }
};

export const addUser = (username) => {
  return {
    type: ADD_USER,
    payload: username,
    meta: {
      debounce: 1000
    }
  }
};

export const editUser = (newUser) => {
  return {
    type: UPDATE_USER,
    payload: newUser
  }
};

export const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    payload: userId
  }
};
