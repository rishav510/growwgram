import unsplash from '../../utils/apis/unsplash';


const fetchSuggestions = () => {
  console.log("fetch suggestions");
  return async (dispatch: Function ) => {
    const response = await unsplash.get('photos/random', {params: {count: 20}});
    dispatch({
      type: 'FETCH_SUGGESTIONS',
      payload: response,
    })
  }
}

export default fetchSuggestions;