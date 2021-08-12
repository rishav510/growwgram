import './header.css';

import React from 'react';

const Header = (props: any) => {
  return (
    <div className = "main-header-wrapper">
      <div className="main-header">
        <div className="growwgram">
          GrowwGram
        </div>
        <div>
          <span className="material-icons material-icons-outlined explore">explore</span>
        </div>
      </div>
    </div>
   
  );
}
export default Header;
