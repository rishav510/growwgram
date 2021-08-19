import { combineReducers } from 'redux';

import currentUserDetails from './currentUserDetails';
import currentUserPosts from './currentUserPosts';
import feedData from './feedData';
import isRequestFailed from './isRequestFailed';
import nextUserPhotosPage from './nextUserPhotosPage';
import popupDisplayed from './popupDisplayed';
import suggestions from './suggestions';
import userDetailsLoading from './userDetailsLoading';
import userPhotosLoading from './userPhotosLoading';


const reducers = combineReducers({
  currentUserPosts,
  feedData,
  currentUserDetails,
  nextUserPhotosPage,
  userDetailsLoading,
  userPhotosLoading,
  popupDisplayed,
  isRequestFailed,
  suggestions,
});

export default reducers;
