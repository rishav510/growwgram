import Action from '../../utils/types/Action';

const userPhotosLoading = (userPhotosLoadingVar: boolean = false, action: Action) => {
  switch(action.type){
    case 'SET_USER_PHOTOS_LOADING':
      return true;
    case 'SET_USER_PHOTOS_LOADED':
      return false;
    default:
      return false;
  }
} 

export default userPhotosLoading;
