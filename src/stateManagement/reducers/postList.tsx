import Action from '../../types/Action';
import { ResponseDataElement } from '../../types/ApiResponseObject';
import PostData from '../../types/PostData';

const postDataList = (posts : Array<PostData> = [], action: Action) => {
  switch(action.type){
    case 'FETCH_RESPONSE_OBJECT':
      const newPosts = action.payload.data.map((responseData: ResponseDataElement) => getPostData(responseData));
      console.log(newPosts);
      return [...posts, ...newPosts];
    default: return posts;
  }
}

const getPostData = (responseDataElement: ResponseDataElement) => {
  const {
    id, 
    alt_description, 
    created_at, 
    description, 
    location:{title}, 
    urls:{raw}, 
    user: {
      instagram_username, 
      profile_image:{medium}
    }, 
    likes, 
    liked_by_user, 
    views
  } = responseDataElement;

  return {
    id, 
    alt_description, 
    created_at, 
    caption: description, 
    location: title, 
    imageURL: raw, 
    username: instagram_username, 
    profilePic: medium, 
    views, 
    likes, 
    likedByUser: liked_by_user
  };
}

export default postDataList;
