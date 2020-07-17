import React, { useContext } from "react";

import { UserContext } from "../context/Context";
import UsersList from "../components/UsersList";

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div className='users-list-outer'>
      <h3 className='text-center section-header'>Select an account</h3>
      <div className='users-list-inner'>
        {users.map((user, index) => {
          return <UsersList user={user} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Users;
