import React, { Component } from "react";
import VisibleUserList from '../src/containers/VisibleUserList';
import VisibleHeader from '../src/containers/VisibleHeader';

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <VisibleHeader/>
        <VisibleUserList />
      </div>
    )
  }
}

export default App;
