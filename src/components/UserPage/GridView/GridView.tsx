import './gridView.css';

import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchUserPhotos
  from '../../../stateManagement/actionCreators/fetchUserPhotos';
import updatePageNumber
  from '../../../stateManagement/actionCreators/updatePageNumber';

class GridView extends React.PureComponent <Props, State>{

  constructor(props: Props){
    super(props);
    this.state = {
      currentPage: 0,
    }
  }
  render(){
    return (
      <InfiniteScroll
        loadMore={()=> {}}
        useWindow={true}
        hasMore={true}
      >
        <div className="grid-wrapper">
          <div className="grid-container">
            {renderPhotos(this.props.photos)}
          </div>
        </div>

      </InfiniteScroll>
  
    );
  }

  handleLoad = () => {
    this.props.fetchUserPhotos(this.props.username, this.state.currentPage);
  }
  
}

const renderPhotos = (photos: Array<any> | null) => {
  return photos?.map(photo => <div className = "grid-view-photo-container" key={photo.id}>
    <img className = "grid-view-photo" src = {photo.urls.raw} alt = "something"/>
    </div>)
}
const mapStateToProps = (state: any) => {
  return {
    photos: state.currentUserPhotos,
    username: state.currentUserDetails?.username,
    page: state.pageLoaded,
  }
}
export default connect (mapStateToProps, {fetchUserPhotos, updatePageNumber})(GridView);


type Props = any;
type State = {
  currentPage: number,
}
