import React, {Component} from 'react'
import Header from '../components/Header';
import {addUser} from "../store/actions/user";
import PropTypes from "prop-types";


class VisibleHeader extends Component {
  constructor(props) {
    super(props);

    this.addUser = this.addUser.bind(this);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  addUser(username) {
    const {store} = this.context;
    store.dispatch(addUser(username));
  }

  render() {
    return (
      <Header addUser={this.addUser}/>
    )
  }
}

export default VisibleHeader
