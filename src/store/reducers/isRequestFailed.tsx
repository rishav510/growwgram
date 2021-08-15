import Action from '../../utils/types/Action';

const isRequestFailed = (requestFailed:boolean = false, action: Action) => {
  switch(action.type){
    case 'SET_API_REQUEST_ERROR':
      return true;
    default:
      return requestFailed;
  }
}

export default isRequestFailed;