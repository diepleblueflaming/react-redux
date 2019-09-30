import {
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from "../action_types";


const initialState  = {
  loading: false,
  users: [
    {
      id: 1,
      name: 'peter'
    },
    {
      id: 2,
      name: 'jame'
    }
  ]
};


const getUser = (state) => {
  return state.users
};


const addUser = (state, newUser) => {
  const newUsers = [...state.users, newUser];
  return Object.assign({}, state, {
    users: newUsers
  });
};


const updateUser = (state, newUser) => {
  const index = state.users.findIndex(user => newUser.id === user.id);

  return Object.assign({}, state, {
    users: [
      ...state.users.slice(0, index),
      newUser,
      ...state.users.slice(index + 1)
    ]
  });
};


const removeUser = (state, userId) => {
  return Object.assign({}, state, {
    users: state.users.filter(user => user.id !== userId)
  });
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return getUser(state);
    case ADD_USER:
      return addUser(state, action.payload);
    case UPDATE_USER:
      return updateUser(state, action.payload);
    case REMOVE_USER:
      return removeUser(state, action.payload);
    default:
      return state;
  }
};
export default userReducer;
