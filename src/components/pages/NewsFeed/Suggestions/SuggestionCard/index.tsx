import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import fetchUserDetails
  from '../../../../../store/actionCreators/fetchUserDetails';

import './suggestionCard.css';


const SuggestionCard = (props: Props) => {

  const {
    username,
    profilePicURL
  } = props;

  const handleUserInfoClick = (username: string) => {
    props.fetchUserDetails(username);
  }

  return (
    <div className = "suggestion-card-container">
      <Link to = {username} onClick = {() => handleUserInfoClick(username)}>
        <img className = "suggestion-card-profile-pic" src = {profilePicURL} alt = {username}/>
      </Link>

      <div className = "suggestion-card-details">
      <Link to = {username} onClick = {() => handleUserInfoClick(username)}>
        <div className = "suggestion-card-username">{username}</div>
      </Link>
        <div className = "suggestion-card-status">New to GrowwGram</div>
      </div>

    </div>
  )
}



type Props = {
  fetchUserDetails: (username:string)=>{},
  profilePicURL: string;
  username: string,
}
export default connect (null,{fetchUserDetails})(SuggestionCard);