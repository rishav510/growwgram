import './header.css';

import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';

const Header = (props: Props) => {
  return (
    <div className = "main-header-wrapper">
      <div className="main-header">
        <div className="growwgram">
          GrowwGram
        </div>
        <div>
          <Link to="/">
            <span className="material-icons material-icons-outlined explore"
            onClick = {()=>{props.deleteCurrentUser()}}
            >explore</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

type Props = {
  deleteCurrentUser: Function,
}
export default connect (null, {deleteCurrentUser})(Header);
