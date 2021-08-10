import './userPage.css';

import { connect } from 'react-redux';

import GridView from './GridView/GridView';

const UserPage = (props: any) => {

  const {userData} = props;
  const posts = userData?.photos.length;
  const followers = userData?.followers;
  const following = userData?.following;
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const profilePic = userData?.profilePic;
  const bio = userData?.bio;

  return(
    <div className="user-page-wrapper">
      <div className="user-page-header-flex">
        <div className = "user-page-profile-pic-container">
          <img className="user-page-profile-pic" src={profilePic} alt="" />
        </div>
        <div className="user-page-details">
          <div className="user-page-details-top">
            <section className="user-page-username">
              <span>{userData?.username}</span>
            </section>
            <button className="follow-button">Follow</button>
            <button className="suggested-bar-button">
              <span className="material-icons material-icons-outlined">expand_more</span>
            </button>
            <button className="ellipsis-button">
              <span className="material-icons material-icons-outlined">more_horiz</span>
            </button>
          </div>
        
          <div className="user-page-details-middle">
            <span className="user-page-stat-data posts"><span className="bold">{posts}</span> posts</span>
            <span className="user-page-stat-data followers"><span className="bold">{followers}</span> followers</span>
            <span className="user-page-stat-data following"><span className="bold">{following}</span> following</span>
          </div>

          <div className="user-page-details-bottom">
            <div className="user-page-fullname bold">{firstName} {lastName}</div>
            <div className="user-page-bio">{bio}</div>
          </div>
        </div>
      </div>
      <div className="user-page-posts-header">
        <span className="posts-display-option material-icons material-icons-outlined">grid_on</span>
        <span className="posts-display-option material-icons material-icons-outlined">crop_portrait</span>
      </div>
      <div className="user-page-photo-gallery">
        <GridView/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.currentUserDetails,

  }
}

export default connect(mapStateToProps)(UserPage);
