import getPostData from '../../utils/functions/getPostData';
import Action from '../../utils/types/Action';
import { ResponseDataElement } from '../../utils/types/ApiResponseObject';
import PostData from '../../utils/types/PostData';

const currentUserPhotos = (userPhotos: Array<PostData> = [], action: Action) => {
  switch(action.type){

    case 'FETCH_USER_PHOTOS': 
    const newUserPhotos = action.payload.data.map((responseData: ResponseDataElement) => getPostData(responseData));
    return [...userPhotos, ...newUserPhotos];

    case 'DELETE_CURRENT_USER':
    return [];

    default:
      return userPhotos;
  }
}

export default currentUserPhotos;
