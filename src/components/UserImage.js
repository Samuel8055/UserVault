import React from "react";

const UserImage = ({ user, profilePic }) => {
  return (
    <>
      <img src={profilePic} alt='user-pic' className='user-picture' />
      <p className='mt-2'>{user.name}</p>
    </>
  );
};

export default UserImage;
