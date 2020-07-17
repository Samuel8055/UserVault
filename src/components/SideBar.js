import React from "react";

const SideBar = ({ userId }) => {
  return (
    <div className='sidebar'>
      <div
        className='nav flex-column nav-pills sidebar-items'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <a
          className='nav-link active'
          id='v-pills-home-tab'
          data-toggle='pill'
          href='#v-pills-home'
          role='tab'
          aria-controls='v-pills-home'
          aria-selected='true'
        >
          Profile
        </a>
        <a
          className='nav-link'
          id='v-pills-profile-tab'
          data-toggle='pill'
          href='#v-pills-profile'
          role='tab'
          aria-controls='v-pills-profile'
          aria-selected='false'
        >
          Posts
        </a>
        <a
          className='nav-link'
          id='v-pills-messages-tab'
          data-toggle='pill'
          href='#v-pills-messages'
          role='tab'
          aria-controls='v-pills-messages'
          aria-selected='false'
        >
          Gallery
        </a>
        <a
          className='nav-link'
          id='v-pills-settings-tab'
          data-toggle='pill'
          href='#v-pills-settings'
          role='tab'
          aria-controls='v-pills-settings'
          aria-selected='false'
        >
          ToDo
        </a>
      </div>
    </div>
  );
};

export default SideBar;
