import { ResponseDataElement } from '../types/ApiResponseObject';


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
    urls:{raw, small}, 
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
    bigImageURL: raw, 
    smallImageURL: small,
    apiUsername: username,
    username, 
    profilePic: medium, 
    views, 
    likes, 
    likedByUser: liked_by_user
  };
}

export default getPostData;