import Action from '../../../utils/types/Action';
import actionTypes from '../actionTypes';


const popupStore = (displayed: boolean, action: Action) => {
  switch(action.type){
    case actionTypes.DISPLAY_POPUP:
      return true;
    case actionTypes.REMOVE_POPUP:
      return false;
    default:
      return false;
  }
}

export default popupStore;