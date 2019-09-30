import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div key={index}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
