import { combineReducers } from 'redux';

import postDataList from './postList';

const reducers = combineReducers({
  postDataList: postDataList,
});

export default reducers;
