import { combineReducers } from 'redux';

import currentUserDetails from './currentUserDetails';
import currentUserPosts from './currentUserPosts';
import nextUserPhotosPage from './nextUserPhotosPage';
import pageLoaded from './pageLoaded';
import postDataList from './postDataList';

const reducers = combineReducers({
  currentUserPosts,
  postDataList,
  currentUserDetails,
  pageLoaded,
  nextUserPhotosPage,
});

export default reducers;
