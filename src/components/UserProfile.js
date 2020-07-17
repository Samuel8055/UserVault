import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

const UserProfile = ({ user }) => {
  const profilePic = user.profilepicture;

  const userInfo = {
    generalInfo: [
      {
        title: "Username",
        content: user.username,
      },

      {
        title: "Email",
        content: user.email,
      },

      {
        title: "Phone",
        content: user.phone,
      },

      {
        title: "Website",
        content: user.website,
      },
    ],

    companyInfo: [
      {
        title: "Name",
        content: user.company.name,
      },

      {
        title: "catchphrase",
        content: user.company.catchPhrase,
      },

      {
        title: "bs",
        content: user.company.bs,
      },
    ],

    addressInfo: [
      {
        title: "Street",
        content: user.address.street,
      },

      {
        title: "Suite",
        content: user.address.suite,
      },

      {
        title: "City",
        content: user.address.city,
      },

      {
        title: "zipcode",
        content: user.address.zipcode,
      },
    ],
  };

  return (
    <>
      <ProfileHeader user={user} profilePic={profilePic} />
      <ProfileBody user={user} profilePic={profilePic} userInfo={userInfo} />
    </>
  );
};

export default UserProfile;
