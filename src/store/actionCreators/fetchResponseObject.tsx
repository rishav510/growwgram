import unsplash from '../../utils/apis/unsplash';


const fetchResponseObject = () => {
  return async (dispatch : Function, getState: Function) => {
    let response;
    let cachedData = localStorage.getItem('FeedData');

    try{

      
      response = await unsplash.get('/photos/random', {params: {count: 10}})
      localStorage.setItem('FeedData', JSON.stringify(getState().feedData.slice(0,10)));
    
      cachedData = localStorage.getItem('FeedData');
      if(cachedData !== null)
      console.log("cached stuff", JSON.parse(cachedData));
      dispatch({
        type: 'FETCH_RESPONSE_OBJECT',
        payload: response,
      });

      
    }
    catch(error){
      dispatch({
        type: 'SET_API_REQUEST_ERROR',
        payload: {
          status: error.response?.status,
        }
      })
    }
    
  }
}

export default fetchResponseObject;
