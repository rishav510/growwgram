import PostData from './PostData';
import UserData from './UserData';

type ReduxState = {
  currentUserDetails: UserData,
  currentUserPosts: Array<PostData>,
  nextUserPhotosPage: number,
  pageLoaded: boolean,
  postDataList: Array<PostData>,
  userDetailsLoading: boolean,
  userPhotosLoading: boolean,
  popupDisplayed: boolean,
  isRequestFailed: boolean,
}

export default ReduxState;
