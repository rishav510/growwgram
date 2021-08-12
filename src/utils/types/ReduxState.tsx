import PostData from './PostData';
import UserData from './UserData';

type ReduxState = {
  currentUserDetails: UserData,
  currentUserPosts: Array<PostData>,
  nextUserPhotosPage: number,
  pageLoaded: boolean,
  postDataList: Array<PostData>,
}

export default ReduxState;
