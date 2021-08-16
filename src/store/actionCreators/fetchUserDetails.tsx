import unsplash from '../../utils/apis/unsplash';

const fetchUserDetails = (username: string) => {
  return async (dispatch: any) => {
    try{

      dispatch({
        type: 'SET_USER_DETAILS_LOADING',
      });
      const response = await unsplash.get(`/users/${username}`,{params: {username, count: 10, orderby: 'latest'}});
      dispatch({
        type: 'FETCH_USER_DETAILS',
        payload: response,
      });
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
        type: 'SET_USER_DETAILS_LOADED',
      })
    }
  }
}

export default fetchUserDetails;
