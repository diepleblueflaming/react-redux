import React, { Component } from "react";
import PropTypes from "prop-types";

const ENTER_KEYCODE = 13;

class UserTextInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInput = element => (this.textInput = element);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    isAddNew: PropTypes.bool
  };

  state = {
    text: this.props.text || ""
  };

  handleSubmit(event) {
    const text = this.textInput.value.trim();
    const keyCode = event.keyCode || event.which;
    if (keyCode === ENTER_KEYCODE) {
      this.props.onSave(text);
      if (this.props.isAddNew) {
        this.setState({ text: "" });
      }
    }
  }

  handleChange() {
    this.setState({ text: this.textInput.value });
  }

  handleBlur() {
    if (!this.props.isAddNew) {
      this.props.onSave(this.state.text);
    }
  }

  render() {
    return (
      <div className="user-input">
        <input
          placeholder={this.props.placeholder}
          autoFocus={true}
          type="text"
          value={this.state.text || ""}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyPress={this.handleSubmit}
          ref={this.setTextInput}
        />
      </div>
    );
  }
}

export default UserTextInput;
