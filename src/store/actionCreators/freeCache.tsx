const freeCache = () => {
  return async () =>{
    localStorage.setItem('FeedData', "");
  }
}

export default freeCache;