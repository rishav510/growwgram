import { combineReducers } from 'redux';

import currentUserDetails from './currentUserDetails';
import currentUserPosts from './currentUserPosts';
import nextUserPhotosPage from './nextUserPhotosPage';
import popupDisplayed from './popupDisplayed';
import postDataList from './postDataList';
import userDetailsLoading from './userDetailsLoading';
import userPhotosLoading from './userPhotosLoading';

const reducers = combineReducers({
  currentUserPosts,
  postDataList,
  currentUserDetails,
  nextUserPhotosPage,
  userDetailsLoading,
  userPhotosLoading,
  popupDisplayed,
});

export default reducers;
