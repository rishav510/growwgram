import unsplash from '../../utils/apis/unsplash';
import Action from '../../utils/types/Action';


const fetchUserPhotos = (username: string, page: number) => {
  return async (dispatch: Dispatch) => {

    try{
      dispatch({
        type: 'SET_USER_PHOTOS_LOADING',
      });

      const photos = await unsplash.get(`/users/${username}/photos`,{params: {username, orderby: 'latest', page, stats: true}})

      dispatch({
        type: 'FETCH_USER_PHOTOS',
        payload: photos,
      })

    }
    catch(error)
    {
      dispatch({
        type: 'SET_API_REQUEST_ERROR',
        payload: {
          status: error.response.status,
        }
      });
    }
    finally{
      dispatch({
        type: 'SET_USER_PHOTOS_LOADED',
      });
    }
  }
}

type Dispatch = (action: Action) => {};

export default fetchUserPhotos;
