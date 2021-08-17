import React from 'react';

import './userDetailsPlaceholder.css';


const UserDetailsPlaceholder = () => {

  return (
    <div className="user-page-header-flex">
      <div className="user-page-profile-pic-container">
        <div className="placeholder-user-page-profile-pic"></div>
      </div>

      <div className="user-page-details">
        <div className="user-page-details-top">
          <div className="placeholder-user-page-username">
            <div className="placeholder-user-page-username"></div>
          </div>

          <div className="user-page-button-tray">
            <div className="placeholder-follow-button">Follow</div>
            <div className="placeholder-expand-button"></div>

          </div>
          <button className="ellipsis-button">
            <span className="material-icons material-icons-outlined">more_horiz</span>
          </button>
        </div>

        <div className="user-page-details-middle">
          <div className="placeholder-user-page-stat-data followers"></div>
          <div className="placeholder-user-page-stat-data following"></div>
        </div>

        <div className="user-page-details-bottom">
          <div className="placeholder-user-page-fullname bold"></div>
          <div className="user-page-bio"></div>
        </div>
      </div>
    </div>
  );

}

export const MemoizedUserDetailsPlaceholder = React.memo(UserDetailsPlaceholder);