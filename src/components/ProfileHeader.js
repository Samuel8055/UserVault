import React from "react";

const ProfileHeader = ({ user, profilePic }) => {
  return (
    <div className='d-flex align-items-center justify-content-between profile-header'>
      <h4>Profile</h4>
      <div className='d-flex align-items-center'>
        <img src={profilePic} alt='user-pic' className='profile-picture mr-2' />
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
