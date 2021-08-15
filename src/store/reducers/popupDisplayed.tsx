import Action from '../../utils/types/Action';

const popupDisplayed = (popupDisplayedVar:boolean = false, action: Action) => {
  switch(action.type){
    case 'DISPLAY_POPUP':
      return true;
    case 'REMOVE_POPUP':
      return false;
    default: 
      return false;
  }

}

export default popupDisplayed;
