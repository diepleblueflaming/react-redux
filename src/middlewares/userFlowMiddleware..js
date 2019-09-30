/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-22:48
 */

import {users} from "../fake_server/users";
import {FETCH_USERS} from "../store/action_types";

const userFlowMiddleware = ({getState, dispatch}) => (next) => (action) => {
  console.log('userFlowMiddleware');
  switch (action.type) {
    case FETCH_USERS:
      return users().
      then(users => {
        next({
          type: action.type,
          payload: users
        });
      });
    default:
      next(action);
  }

};

export default userFlowMiddleware;
