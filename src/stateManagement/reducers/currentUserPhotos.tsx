import Action from '../../types/Action';

const currentUserPhotos = (userPhotos: Array<any> = [], action: Action) => {
  switch(action.type){
    case 'FETCH_USER_DETAILS': 
    const newUserPhotos = action.payload.photos.data;
    return [...userPhotos, ...newUserPhotos];
    default:
      return userPhotos;
  }
}

export default currentUserPhotos;
