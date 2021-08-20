import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';
import fetchSuggestions from '../../../store/actionCreators/fetchSuggestions';
import freeCache from '../../../store/actionCreators/freeCache';

import './header.css';


const Header = (props: Props) => {
  
  const handleExplore = () => {
    props.deleteCurrentUser();
    props.freeCache();
    props.fetchSuggestions();
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
  deleteCurrentUser: () => {},
  freeCache: () => {},
  fetchSuggestions: () => {},
}

const connectedHeader = connect (null, {deleteCurrentUser, freeCache, fetchSuggestions})(Header);
export const MemoizedHeader = React.memo(connectedHeader);
