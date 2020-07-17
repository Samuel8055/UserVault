import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ user, index }) => {
  return (
    <>
      <ul key={index}>
        <Link to={`/profile/${user.id}`}>
          <li className='d-flex align-items-center user-list'>
            <img
              src={user.profilepicture}
              alt='profile-pic'
              className='profile-picture'
            />
            <p className='ml-3'>{user.name}</p>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default UsersList;
