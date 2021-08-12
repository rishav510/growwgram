import './userPage.css';

import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchUserPhotos from '../../../store/actionCreators/fetchUserPhotos';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import UserData from '../../../utils/types/UserData';
import ImageFeed from '../../common/ImageFeed/ImageFeed';
import GridView from './GridView/GridView';

const UserPage = (props: Props) => {

  const [gridViewSelected, setGridViewSelected] = useState(false);

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
            <div className ="user-page-button-tray">
              <button className="follow-button">Follow</button>
              <button className="suggested-bar-button">
              <span className="material-icons material-icons-outlined">expand_more</span>
            </button>
            </div>
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
        <span className={`
          grid-button 
          posts-display-option 
          material-icons 
          material-icons-outlined
          ${gridViewSelected?'selected':''}
          `}
          onClick = {() => {setGridViewSelected(true)}}
        >grid_on</span>
        <span className={`
          list-button 
          posts-display-option 
          material-icons 
          material-icons-outlined
          ${gridViewSelected?'':'selected'}
          `}
          onClick = {() => {setGridViewSelected(false)}}
        >crop_portrait</span>
      </div>
      <div className="user-page-photo-gallery">
        {
        gridViewSelected? 
        <GridView data = {props.userPhotos}/> :
        <div className="user-feed-list">
        <InfiniteScroll 
            loadMore = {() => {
              props.fetchUserPhotos(userData?.username);
            }}
            useWindow = {true}
            hasMore = {true}>
            {<ImageFeed data = {props.userPhotos}/>}
          </InfiniteScroll>
        </div>
        }

      </div>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    userData: state.currentUserDetails,
    userPhotos: state.currentUserPosts,
    nextPage: state.nextUserPhotosPage,
  }
}

type Props = {
  userData: UserData,
  userPhotos: Array<PostData>,
  fetchUserPhotos: Function,
};

export default connect(mapStateToProps, {fetchUserPhotos})(UserPage);

