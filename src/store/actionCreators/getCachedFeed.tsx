
const getCachedFeed = () => {
  return async (dispatch: Function, getState: Function) => {
    const cachedData = localStorage.getItem('FeedData');

    if (cachedData)
    {
      const parsedCacheData = JSON.parse(cachedData);
      dispatch({
        type: 'GET_CACHED_FEED',
        payload: parsedCacheData,
      })
    }


  }
}

export default getCachedFeed;