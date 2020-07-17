import React from "react";
import UserDetails from "./UserDetails";
import UserCompany from "./UserCompany";
import UserImage from "./UserImage";

const ProfileLeftSection = ({ user, profilePic, userInfo }) => {
  return (
    <div className='col-5 profile-left-container text-center'>
      <UserImage user={user} profilePic={profilePic} />
      <UserDetails userInfo={userInfo} />
      <UserCompany userInfo={userInfo} />
    </div>
  );
};

export default ProfileLeftSection;
