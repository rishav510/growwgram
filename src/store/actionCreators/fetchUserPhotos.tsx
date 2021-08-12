import unsplash from '../../utils/apis/unsplash';

const fetchUserPhotos = (username: string, page: number) => {
  return async (dispatch: any) => {
    console.log("fetch user photos ran");

    const photos = await unsplash.get(`/users/${username}/photos`,{params: {username, orderby: 'latest', page, stats: true}})
    console.log("user photos", photos);

    dispatch({
      type: 'FETCH_USER_PHOTOS',
      payload: photos,
    })
  }
}

export default fetchUserPhotos;
