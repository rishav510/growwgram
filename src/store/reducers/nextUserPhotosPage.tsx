import Action from '../../utils/types/Action';

const nextUserPhotosPage = (nextPage: number = 1, action: Action) => {
  switch(action.type){

    case 'FETCH_USER_PHOTOS': 
    return nextPage + 1;

    case 'FETCH_USER_DETAILS':
    return 1;

    default:
      return nextPage;
  }
}

export default nextUserPhotosPage;
