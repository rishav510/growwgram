import getPostData from '../../utils/functions/getPostData';
import Action from '../../utils/types/Action';
import { ResponseDataElement } from '../../utils/types/ApiResponseObject';
import PostData from '../../utils/types/PostData';


const suggestions = (newSuggestions: Array<PostData> = [], action: Action) => {
  switch(action.type){
    case 'FETCH_SUGGESTIONS':
      let rawSuggestions = action.payload.data.map((suggestion: ResponseDataElement) => getPostData(suggestion)).reverse();
      newSuggestions = rawSuggestions.filter((suggestion: PostData, index: number) => rawSuggestions.indexOf(suggestion) === index);
      return newSuggestions;
    default:
      return newSuggestions;
  }
}
export default suggestions;