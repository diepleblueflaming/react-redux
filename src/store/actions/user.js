import {
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../action_types';

export const getUser = () => {
  return {
    type: GET_USER
  }
};

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser
  }
};

export const updateUser = (newUser) => {
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
