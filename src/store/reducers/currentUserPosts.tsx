import Action from '../../utils/types/Action';
import { ResponseDataElement } from '../../utils/types/ApiResponseObject';
import PostData from '../../utils/types/PostData';

const currentUserPhotos = (userPhotos: Array<PostData> = [], action: Action) => {
  switch(action.type){

    case 'FETCH_USER_PHOTOS': 

    const newUserPhotos = action.payload.data.map((responseData: ResponseDataElement) => getPostData(responseData));
    console.log("new_user_post_data: ", newUserPhotos);
    return [...userPhotos, ...newUserPhotos];

    case 'DELETE_CURRENT_USER':
    return [];

    default:
      return userPhotos;
  }
}

const getPostData = (responseDataElement: ResponseDataElement) => {
  const defaultLocation = {
    title: "",
  }
  const {
    id, 
    alt_description, 
    created_at, 
    description, 
    location:{title} = defaultLocation, 
    urls:{raw}, 
    user: {
      username, 
      profile_image:{medium}
    }, 
    likes, 
    liked_by_user, 
    views,

  } = responseDataElement;

  return {
    id, 
    alt_description, 
    created_at, 
    caption: description, 
    location: title, 
    imageURL: raw, 
    apiUsername: username,
    username, 
    profilePic: medium, 
    views, 
    likes, 
    likedByUser: liked_by_user
  };
}

export default currentUserPhotos;
