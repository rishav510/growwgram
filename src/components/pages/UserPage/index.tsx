import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import displayPopup from '../../../store/actionCreators/displayPopup';
import fetchUserPhotos from '../../../store/actionCreators/fetchUserPhotos';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import UserData from '../../../utils/types/UserData';
import { MemoizedErrorDialog as ErrorDialog } from '../../common/ErrorDialog';
import ImageFeed from '../../common/ImageFeed';
import StubButton from '../../common/StubButton';

import GridView from './GridView';
import {
  MemoizedUserDetailsPlaceholder as UserDetailsPlaceholder
} from './UserDetailsPlaceholder';

import './userPage.css';


const UserPage = (props: Props) => {

  const handleScroll = () => {
    window.onscroll = () => {
      if(window.scrollY > 4000)
      {
        setFloatingButtonVisible(true);
      }
        
      else
        setFloatingButtonVisible(false);
    }
    setFloatingButtonVisible(false);
  }

  window.addEventListener('scroll', handleScroll, true);

  const [gridViewSelected, setGridViewSelected] = useState(false);
  const [focusOn, setFocusOn] = useState("");
  const [floatingButtonVisible, setFloatingButtonVisible] = useState(false);
  const {userData} = props; 
  const {userPhotos} = props;

  const setListView = (postId: string) => {
    setFocusOn(postId);
    setGridViewSelected(false);
  }

  const clearScroll = () => {
    setFocusOn("");
  }




  useEffect (() => {
    
  })


  const numbersMatch = (props.userData?.posts && props.userPhotos && (props.userData?.posts !== props.userPhotos.length))?true:false;
  
  return (
    <>
    <div className={`user-page-wrapper ${props.isRequestFailed? 'hidden' : ''}`}>
      {
      (props.isRequestFailed)?
          null:
        props.pageLoading ?
        renderUserDetailsPlaceholder() : renderUserDetails(userData)
      }

      <div className={`user-page-posts-header`}>

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
          ${gridViewSelected? '' : 'selected'}
          `}
          onClick = {() => { setGridViewSelected(false); clearScroll()}}>crop_portrait</span>

      </div>

      <div className="user-page-photo-gallery">
      {
        gridViewSelected ?
        <GridView onClick = {setListView} data={userPhotos} totalPosts ={userData.posts}/> :
              <div className="user-feed-list">
                <InfiniteScroll

                  loadMore={() => {
                    if (!props.photosLoading && !props.pageLoading) {
                      props.fetchUserPhotos(userData?.username, props.nextPage)
                    }
                  }}

                  hasMore = {!props.isRequestFailed && numbersMatch}

                  useWindow={true}

                  loader={
                    <div key={0} className="loader">
                      <div className="loader-image-container">
                      </div>
                    </div>
                  }>

                  <ImageFeed focusOn = {focusOn} feedData={userPhotos} />

                </InfiniteScroll>
              </div>
          }
        {(gridViewSelected)? null:
          <button className ={`grid-view-button-floating ${(floatingButtonVisible)? 'opaque': 'transparent'}`}
          onClick = {() => {setGridViewSelected(true); window.scrollTo(0,0)}}>
            <span className = "material-icons material-icons-outlined">grid_on</span>
          </button>
        } 
        
      </div>    
    </div>
      {props.isRequestFailed? <ErrorDialog/>: null}
    </>
  )

}

const renderUserDetailsPlaceholder = () => {
  return <UserDetailsPlaceholder />
}

const renderUserDetails = (userData: UserData) => {

  const followers = userData?.followers;
  const following = userData?.following;
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const posts = userData?.posts;
  const profilePic = userData?.profilePic;
  const username = userData?.username;
  const bio = userData?.bio;

  return (
    <div className="user-page-header-flex">

      <div className="user-page-profile-pic-container">
        <img className="user-page-profile-pic" src={profilePic} alt={userData?.username} />
      </div>

      <div className="user-page-details">

        <div className="user-page-details-top">

          <section className="user-page-username">
            <span>{username}</span>
          </section>

          <div className="user-page-button-tray">           
            <StubButton name = "Follow" isButton = {true} isIcon = {false} additionalCSS = "follow-button" />
            <StubButton isButton = {true} name = "expand_more" isIcon = {true} additionalCSS = "suggested-bar-button"/>
          </div>

          <StubButton isButton = {true} name = "more_horiz" isIcon = {true} additionalCSS = "ellipsis-button"/>

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
  displayPopup: Function,
};

export default connect(mapStateToProps, { fetchUserPhotos, displayPopup })(UserPage);