import './gridView.css';

import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchUserPhotos from '../../../../store/actionCreators/fetchUserPhotos';
import updatePageNumber
  from '../../../../store/actionCreators/updatePageNumber';
import PostData from '../../../../utils/types/PostData';
import ReduxState from '../../../../utils/types/ReduxState';

class GridView extends React.PureComponent <Props, State>{

  render(){
    return (
      <InfiniteScroll
        loadMore={()=> {}}
        useWindow={true}
        hasMore={true}
      >
        <div className="grid-wrapper">
          <div className="grid-container">
            {renderPhotos(this.props.data)}
          </div>
        </div>
      </InfiniteScroll>
  
    );
  }

  handleLoad = () => {
    this.props.fetchUserPhotos(this.props.username, this.state.currentPage);
  }
  
}

const renderPhotos = (posts: Array<PostData>) => {
  console.log(posts);
  return posts?.map(post => <div className = "grid-view-photo-container" key={post.id}>
    <img className = "grid-view-photo" src = {post.imageURL} alt = {post.alt_description}/>
    </div>)
}
const mapStateToProps = (state: ReduxState) => {
  return {
    username: state.currentUserDetails?.username,
  }
}
export default connect (mapStateToProps, {fetchUserPhotos, updatePageNumber})(GridView);


type Props = {
  data: Array<PostData>,
  username: string,
  fetchUserPhotos: Function,
}
type State = {
  currentPage: number,
}
