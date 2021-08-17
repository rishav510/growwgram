import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';

import './header.css';


const Header = (props: Props) => {
  return (
    <div className = "main-header-wrapper">
      <div className="main-header">
        <div className="growwgram">
          <Link to="/">
           <span onClick = {()=>{props.deleteCurrentUser()}}>GrowwGram</span>
          </Link>
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

const connectedHeader = connect (null, {deleteCurrentUser})(Header);
export const MemoizedHeader = React.memo(connectedHeader);
