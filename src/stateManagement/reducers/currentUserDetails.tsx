import Action from '../../types/Action';
import ResponseUserData from '../../types/ResponseUserData';
import UserData from '../../types/UserData';

const currentUserDetails = (userData: UserData | null = null, action: Action) => {
  switch(action.type){
    case 'FETCH_USER_DETAILS': 
    const newUserData = getNewUser(action.payload.response.data);
    return newUserData;
    default:
      return userData;
  }
}

const getNewUser = (responseUserData: ResponseUserData) => {
  const {
    first_name,
    last_name,
    followers_count,
    following_count,
    profile_image: {
      large,
    },
    bio,
    photos,
    username,
  } = responseUserData;

  return {
    firstName: first_name,
    lastName: last_name,
    followers: followers_count,
    following: following_count,
    bio,
    profilePic: large,
    photos,
    username,
  };
}

export default currentUserDetails;
