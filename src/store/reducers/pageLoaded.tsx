import Action from '../../utils/types/Action';

const pageLoaded = (page: number = 0, action: Action) => {
  switch (action.type){
    case 'LOAD_NEXT_PAGE':
      return page + 1;
    default:
      return page;
  }
}
export default pageLoaded;
