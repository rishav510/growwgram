import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';
import freeCache from '../../../store/actionCreators/freeCache';

import './header.css';


const Header = (props: Props) => {
  
  const handleExplore = () => {
    props.deleteCurrentUser();
    props.freeCache();
    window.location.href = "/";
  }

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
            onClick = {()=>{handleExplore();}}
            >explore</span>
          </Link>
        </div>
      </div>
    </div>
  ); 
}

type Props = {
  deleteCurrentUser: Function,
  freeCache: () => {},
}

const connectedHeader = connect (null, {deleteCurrentUser, freeCache})(Header);
export const MemoizedHeader = React.memo(connectedHeader);
