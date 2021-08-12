import Action from '../../types/Action';

const currentUserPhotos = (userPhotos: Array<any> = [], action: Action) => {
  switch(action.type){
    case 'FETCH_USER_PHOTOS': 
    console.log("added photos");
    const newUserPhotos = action.payload.data;
    return [...newUserPhotos];

    case 'DELETE_CURRENT_USER':
    return [];

    default:
      return userPhotos;
  }
}

export default currentUserPhotos;
