import React from "react";
import ProfileLeftSection from "./ProfileLeftSection";
import ProfileRightSection from "./ProfileRightSection";

const ProfileBody = ({ user, profilePic, userInfo }) => {
  return (
    <div className='row profile-outer'>
      <ProfileLeftSection
        user={user}
        profilePic={profilePic}
        userInfo={userInfo}
      />

      <ProfileRightSection userInfo={userInfo} />
    </div>
  );
};

export default ProfileBody;
