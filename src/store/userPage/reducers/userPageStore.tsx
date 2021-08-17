import getPostData from '../../../utils/functions/getPostData';
import Action from '../../../utils/types/Action';
import { ResponseDataElement } from '../../../utils/types/ApiResponseObject';
import PostData from '../../../utils/types/PostData';
import UserData from '../../../utils/types/UserData';
import actionTypes from '../userPage_actionTypes';


const userPageStore = (userPageData: UserPageData = defaultUserPageData, action: Action) => {
  switch(action.type){
    case actionTypes.FETCH_USER_DETAILS:
      return {...userPageData, profileData: action.payload.data};
    case actionTypes.SET_USER_DETAILS_LOADING:
      return {...userPageData, profileStates: {...userPageData.profileStates, loading: true}};
    case actionTypes.SET_USER_DETAILS_LOADED:
      return {...userPageData, profileStates: {...userPageData.profileStates, loading: false}};
    case actionTypes.DELETE_CURRENT_USER:
      return {...userPageData, profileData: null, profileStates: defaultState};
    case actionTypes.FETCH_USER_PHOTOS:
      const newUserPhotos = action.payload.data.map((responseData: ResponseDataElement) => getPostData(responseData));
      return {...userPageData, galleryData: [...userPageData.galleryData, ...newUserPhotos]};
    case actionTypes.LOAD_NEXT_PAGE:
      return {...userPageData, nextPage: userPageData.nextPage + 1}
    case actionTypes.SET_API_REQUEST_ERROR:
      return {...userPageData, profileStates: {...userPageData.profileStates, error: true}, galleryStates: {...userPageData.galleryStates, error: true}}
  }
}

const defaultUserPageData: UserPageData = {
  profileStates: {
    empty: true,
    error: false,
    loading: false,
  },
  galleryStates: {
    empty: true,
    error: false,
    loading: false,
  },
  galleryData: [],
  nextPage: 1,
}

const defaultState: States = {
  empty: true,
  error: false,
  loading: false,
}

type UserPageData = {
  profileStates: States,
  galleryStates: States,
  profileData?: UserData,
  galleryData: Array<PostData>,
  nextPage: number,
}

type States = {
  empty: boolean,
  error: boolean,
  loading?: boolean,
}

export default userPageStore;