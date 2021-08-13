import unsplash from '../../utils/apis/unsplash';

const fetchResponseObject = () => {
  return async (dispatch : Function) => {
    const response = await unsplash.get('/photos/random', {params: {count: 10}})
    console.log("action creator response",response);
    dispatch({
      type: 'FETCH_RESPONSE_OBJECT',
      payload: response,
    })
  }
}

export default fetchResponseObject;
