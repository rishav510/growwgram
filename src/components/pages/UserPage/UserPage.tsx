import './userPage.css';
import './userDetailsPlaceholder.css';

import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchUserPhotos from '../../../store/actionCreators/fetchUserPhotos';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import UserData from '../../../utils/types/UserData';
import ErrorDialog from '../../common/ErrorDialog/ErrorDialog';
import ImageFeed from '../../common/ImageFeed/ImageFeed';
import GridView from './GridView/GridView';

const UserPage = (props: Props) => {

  const [gridViewSelected, setGridViewSelected] = useState(false);
  const { userData } = props; 
  const {userPhotos} = props;

  return (
    <>
    <div className={`user-page-wrapper
      ${props.isRequestFailed? 'hidden' : ''}
    `}

    >
      {(props.isRequestFailed)?
          null:
        (props.pageLoading ?
        renderPlaceholder() : renderUserDetails(userData)
        )
      }

      <div className=
        {`
          user-page-posts-header
          
        `}
      >
        <span className={`
          grid-button 
          posts-display-option 
          material-icons 
          material-icons-outlined
          ${gridViewSelected ? 'selected' : ''}
          `}
          onClick={() => { setGridViewSelected(true) }}>grid_on</span>
        <span className={`
          list-button 
          posts-display-option 
          material-icons 
          material-icons-outlined
          ${gridViewSelected ? '' : 'selected'}
          `}
          onClick = 
          {() => { setGridViewSelected(false) }}>crop_portrait</span>
      </div>
      <div className="user-page-photo-gallery">
      {
        gridViewSelected ?
        <GridView data={userPhotos} /> :
        <div className="user-feed-list">
        <InfiniteScroll
        
          loadMore={() => {
            if (!props.photosLoading && !props.pageLoading)
            {
              console.log("loadmore ran ...");
              props.fetchUserPhotos(userData?.username, props.nextPage)
            }

          }}
          useWindow={true}
          loader = {
            <div className = "loader" key ={0}>
              Loading ...
            </div>
          }
          hasMore = {!props.isRequestFailed}>

              
              <ImageFeed isProfilePicClickable = {false} data={userPhotos} />
              
          
        </InfiniteScroll>
        </div>
}
      </div>
      
    </div>
      {props.isRequestFailed? <ErrorDialog/>: null}

    </>
    
  )
}

const renderPlaceholder = () => {
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

const renderUserDetails = (userData: UserData) => {

  const followers = userData?.followers;
  const following = userData?.following;
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const profilePic = userData?.profilePic;
  const username = userData?.username;
  const bio = userData?.bio;

  return (
    <div className="user-page-header-flex">
      <div className="user-page-profile-pic-container">
        <img className="user-page-profile-pic" src={profilePic} alt="" />
      </div>
      <div className="user-page-details">
        <div className="user-page-details-top">
          <section className="user-page-username">
            <span>{username}</span>
          </section>
          <div className="user-page-button-tray">
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
          <span className="user-page-stat-data followers"><span className="bold">{followers}</span> followers</span>
          <span className="user-page-stat-data following"><span className="bold">{following}</span> following</span>
        </div>

        <div className="user-page-details-bottom">
          <div className="user-page-fullname bold">{firstName} {lastName}</div>
          <div className="user-page-bio">{bio}</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    userData: state.currentUserDetails,
    userPhotos: state.currentUserPosts,
    nextPage: state.nextUserPhotosPage,
    pageLoading: state.userDetailsLoading,
    photosLoading: state.userPhotosLoading,
    isRequestFailed: state.isRequestFailed,
  }
}

type Props = {
  userData: UserData,
  userPhotos: Array<PostData>,
  fetchUserPhotos: Function,
  pageLoading: boolean,
  photosLoading: boolean,
  nextPage: number,
  isRequestFailed: boolean,
};

export default connect(mapStateToProps, { fetchUserPhotos })(UserPage);

