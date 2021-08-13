import Action from '../../utils/types/Action';

const userDetailsLoading = (userPageLoadingVar: boolean = false, action: Action) => {
  switch(action.type){
    case 'SET_USER_DETAILS_LOADING':
      return true;
    case 'SET_USER_DETAILS_LOADED':
      return false;
    default:
      return userPageLoadingVar;
  }
}

export default userDetailsLoading;
