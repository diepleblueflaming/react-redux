import React, {Component} from 'react';
import {editUser, removeUser, fetchUsers} from '../store/actions/user';
import UserList from '../components/user/UserList';
import PropTypes from 'prop-types';

class VisibleUserList extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  editUser = (userId, username) => {
    const {store} = this.context;
    store.dispatch(editUser({
      id: userId,
      username
    }));
  };

  removeUser = (userId) => {
    const {store} = this.context;
    store.dispatch(removeUser(userId));
  };

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });
    // fetch users from server
    store.dispatch(fetchUsers());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const {store} = this.context;
    const {user} = store.getState();
    const props = {
      users: user.users,
      actions: {
        editUser: this.editUser,
        removeUser: this.removeUser
      }
    };
    return(
      <UserList {...props}  />
    )
  }
}

export default VisibleUserList;
