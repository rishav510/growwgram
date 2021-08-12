import { combineReducers } from 'redux';

import currentUserDetails from './currentUserDetails';
import currentUserPhotos from './currentUserPhotos';
import pageLoaded from './pageLoaded';
import postDataList from './postList';

const reducers = combineReducers({
  currentUserPhotos,
  postDataList,
  currentUserDetails,
  pageLoaded,
});

export default reducers;
