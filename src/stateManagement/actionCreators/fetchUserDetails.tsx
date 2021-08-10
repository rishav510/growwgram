import unsplash from '../../apis/unsplash';

const fetchUserDetails = (username: string) => {
  return async (dispatch: any) => {
    const response = await unsplash.get(`/users/${username}`,{params: {username, count: 10}});
    const photos = await unsplash.get(`/users/${username}/photos`,{params: {username}})
    console.log("fetchUserDetails response: ", response);
    console.log("user photos", photos);
    dispatch({
      type: 'FETCH_USER_DETAILS',
      payload: {
        response,
        photos,
      }
    })
  }
}

export default fetchUserDetails;
