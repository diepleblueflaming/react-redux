import React from 'react';
import PropTypes from 'prop-types';
import UserTextInput from './user/UserTextInput';

const Header = ({addUser}) => {
  return (
    <div className="header">
      <UserTextInput
        isAddNew={true}
        onSave={(text) => {addUser(text)}} />
    </div>
  )
};

Header.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default Header;
