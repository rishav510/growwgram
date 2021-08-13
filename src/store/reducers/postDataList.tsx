import getPostData from '../../utils/functions/getPostData';
import Action from '../../utils/types/Action';
import { ResponseDataElement } from '../../utils/types/ApiResponseObject';
import PostData from '../../utils/types/PostData';

const postDataList = (posts : Array<PostData> = [], action: Action) => {
  switch(action.type){
    case 'FETCH_RESPONSE_OBJECT':
      const newPosts = action.payload.data.map((responseData: ResponseDataElement) => getPostData(responseData));
      console.log(newPosts);
      return [...posts, ...newPosts];
    default: return posts;
  }
}

export default postDataList;
