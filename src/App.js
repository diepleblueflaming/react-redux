import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreator from "./store/actions/user";

import "./styles.css";

const mapStateToProps = state => {
  return {
    state: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionsCreator, dispatch)
});

class App extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.onUpdateUserName = this.onUpdateUserName.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.state = {
      isUpdateUsername: false,
      updateUserId: 0
    };
  }

  addUser(event) {
    const usernameElement = document.getElementById("username");
    const name = usernameElement.value;
    const keyCode = event.keyCode || event.which;
    if (!name || keyCode !== 13) {
      return false;
    }
    usernameElement.value = "";

    if (this.state.isUpdateUsername) {
      this.props.actions.updateUser({
        id: this.state.updateUserId,
        name
      });
      this.setState({
        isUpdateUsername: false,
        updateUserId: 0
      });
    } else {
      const newUser = {
        id: this.props.state.users.length + 1,
        name
      };
      this.props.actions.addUser(newUser);
    }
  }

  onUpdateUserName(event) {
    const usernameElement = document.getElementById("username");
    const currentElement = event.currentTarget;
    const currentUsername = currentElement.innerText;
    const currentUserId = currentElement.getAttribute("data-id");
    usernameElement.value = currentUsername;
    this.setState({
      isUpdateUsername: true,
      updateUserId: Number(currentUserId)
    });
    usernameElement.focus();
  }

  onDeleteUser(event) {
    const currentElement = event.currentTarget;
    const currentUserId = currentElement.previousSibling.getAttribute(
      "data-id"
    );
    this.props.actions.removeUser(Number(currentUserId));
  }

  render() {
    return (
      <div className="App">
        <div className="user-input">
          <input type="text" id="username" onKeyPress={this.addUser} />
        </div>
        {this.props.state.users.map((user, index) => (
          <div className="container">
            <div
              className="title"
              key={index}
              data-id={user.id}
              onClick={this.onUpdateUserName}
            >
              {user.name}
            </div>
            <div className="remove-btn" onClick={this.onDeleteUser}>
              Delete
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
