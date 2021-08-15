import unsplash from '../../utils/apis/unsplash';

const fetchResponseObject = () => {
  return async (dispatch : Function) => {

    try{
      const response = await unsplash.get('/photos/random', {params: {count: 10}})
      dispatch({
      type: 'FETCH_RESPONSE_OBJECT',
      payload: response,
    })
    }
    catch(error){
      dispatch({
        type: 'SET_API_REQUEST_ERROR',
        payload: {
          status: error.response.status,
        }
      })
      console.log(error.response.status);
    }
    finally{
      console.log("finally");
    }
    
  }
}

export default fetchResponseObject;
