import { combineReducers } from 'redux';

import currentUserDetails from './currentUserDetails';
import currentUserPhotos from './currentUserPhotos';
import postDataList from './postList';

const reducers = combineReducers({
  currentUserPhotos,
  postDataList,
  currentUserDetails,
});

export default reducers;
