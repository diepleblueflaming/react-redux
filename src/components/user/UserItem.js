import React, {Component} from 'react';
import UserTextInput from './UserTextInput';

class User extends Comment {

  state = {
    editting: false
  }


  handleSave() {
    
  }

  render () {

    const {user} = this.props;


    let element = '';

    if (this.state.editting) {
      element = <UserTextInput onSave={} text={user.username}>
    }

    return (
      <div className="container">
        <div className="title" data-id={user.id} onClick={onUpdateUserName}>
          {user.name}
        </div>
        <div className="remove-btn" onClick={onRemoveUser}>
          Delete
        </div>
      </div>
    );
  }
};

export default User;
