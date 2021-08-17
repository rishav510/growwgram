import getPostData from '../../../utils/functions/getPostData';
import Action from '../../../utils/types/Action';
import { ResponseDataElement } from '../../../utils/types/ApiResponseObject';
import PostData from '../../../utils/types/PostData';
import actionTypes from '../newsFeed_actionTypes';


const newsFeedStore = (newsFeedData : NewsFeedStore = {posts: [], states: {empty: true, error: false}}, action: Action) => {
  switch(action.type){

    case actionTypes.FETCH_RESPONSE_OBJECT:
      const newPosts: NewPosts = action.payload?.data.map((responseData: ResponseDataElement) => getPostData(responseData));
      return {posts: [...newPosts], states: {empty: false, error: false}};

    case actionTypes.SET_API_REQUEST_ERROR:
      return {...newsFeedData, states: {...newsFeedData.states, error: true}};

    default: return newsFeedData;
  }
}

type NewPosts = Array<PostData>

type NewsFeedStore = {
  posts: Array<PostData>,
  states: States,
}

type States = {
  empty: boolean,
  error: boolean,
}
export default newsFeedStore;