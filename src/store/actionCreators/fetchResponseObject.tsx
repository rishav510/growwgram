import unsplash from '../../utils/apis/unsplash';


const fetchResponseObject = () => {
  return async (dispatch : Function, getState: Function) => {
    let response;
    const cachedData = localStorage.getItem('FeedData');
    
    try{

      if (cachedData && getState().feedData.length === 0)
      {
        const parsedCacheData = JSON.parse(cachedData);

        dispatch({
          type: 'GET_CACHED_FEED',
          payload: parsedCacheData,
        })
      }

      else
      {
        response = await unsplash.get('/photos/random', {params: {count: 10}});

        dispatch({
          type: 'FETCH_RESPONSE_OBJECT',
          payload: response,
        });
      }
     

      
    }
    catch(error){
      dispatch({
        type: 'SET_API_REQUEST_ERROR',
        payload: {
          status: error.response?.status,
        }
      })
    }

    finally{
      localStorage.setItem('FeedData', JSON.stringify(getState().feedData.slice(0,10)));
    }
    
  }
}

export default fetchResponseObject;
