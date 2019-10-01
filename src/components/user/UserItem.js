import React, {Component} from 'react';
import UserTextInput from './UserTextInput';
import PropTypes from 'prop-types';

class User extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    editUser: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
  };

  state = {
    editing: false
  };

  handleSave = (userId, text) => {
    if (text.length === 0) {
      this.props.removeUser(userId);
    } else {
      this.props.editUser(userId, text);
    }
    this.setState({editing: false});
  };

  handleRemoveUser = (userId) => {
    return (event) => {
      event.preventDefault();
      this.props.removeUser(userId);
    }
  };

  handleDoubleClick = () => {
    this.setState({editing: true});
  };

  render () {
    const {user} = this.props;
    let element = '';

    if (this.state.editing) {
      element = <UserTextInput
        onSave={text => this.handleSave(user.id, text)}
        isAddNew={false}
        text={user.username}
      />
    } else {
      element = <li className="user-info">
        <label
          className="title"
          data-id={user.id}
          onDoubleClick={this.handleDoubleClick}
        >
          {user.username}
        </label>
        <button className="remove-btn" onClick={this.handleRemoveUser(user.id)}> </button>
      </li>
    }
    return (
     element
    );
  }
}

export default User;
