import React, { useContext } from "react";

import { UserContext } from "../context/Context";
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";
import ComingSoon from "../components/ComingSoon";

const Profile = (props) => {
  const userId = parseInt(props.match.params.slug);

  const { getUser } = useContext(UserContext);
  const user = getUser(userId);

  return (
    <div className='user-profile-container'>
      <div className='row'>
        <div className='sidebar-container'>
          <SideBar />
        </div>
        <div className='col-9 mx-auto content-container'>
          <div className='tab-content' id='v-pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='v-pills-home'
              role='tabpanel'
              aria-labelledby='v-pills-home-tab'
            >
              <UserProfile user={user} />
            </div>
            <div
              className='tab-pane fade'
              id='v-pills-profile'
              role='tabpanel'
              aria-labelledby='v-pills-profile-tab'
            >
              <ComingSoon />
            </div>
            <div
              className='tab-pane fade'
              id='v-pills-messages'
              role='tabpanel'
              aria-labelledby='v-pills-messages-tab'
            >
              <ComingSoon />
            </div>
            <div
              className='tab-pane fade'
              id='v-pills-settings'
              role='tabpanel'
              aria-labelledby='v-pills-settings-tab'
            >
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
