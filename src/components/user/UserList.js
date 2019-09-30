import React from 'react';
import UserItem from "./UserItem";

const UserList = ({users, actions}) => {
  return (
    <ul className="user-list">
      {users.map((user, index) =>
          <UserItem  key={index} user={user} {...actions}/>
      )}
    </ul>
  );
};

export default UserList;
