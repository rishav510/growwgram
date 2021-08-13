import unsplash from '../../utils/apis/unsplash';

const fetchUserPhotos = (username: string, page: number) => {
  return async (dispatch: any) => {

    try{
      dispatch({
        type: 'SET_USER_PHOTOS_LOADING',
      });
      console.log('fetch user photos')
      const photos = await unsplash.get(`/users/${username}/photos`,{params: {username, orderby: 'latest', page, stats: true}})
      dispatch({
        type: 'FETCH_USER_PHOTOS',
        payload: photos,
      })
      console.log('done loading photographs');
    }
    catch(err)
    {
      console.log(err);
    }
    finally{
      dispatch({
        type: 'SET_USER_PHOTOS_LOADED',
      });
      console.log("fetching done ...");
    }
  }
}

export default fetchUserPhotos;
