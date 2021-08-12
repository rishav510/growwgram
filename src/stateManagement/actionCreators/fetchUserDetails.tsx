import unsplash from '../../apis/unsplash';
import deleteCurrentUser from './deleteUserDetails';

const fetchUserDetails = (username: string) => {
  return async (dispatch: any) => {
    const response = await unsplash.get(`/users/${username}`,{params: {username, count: 10, orderby: 'latest'}});
    console.log("fetchUserDetails response: ", response);
    deleteCurrentUser();
    dispatch({
      type: 'FETCH_USER_DETAILS',
      payload: response,
    })
  }
}

export default fetchUserDetails;
