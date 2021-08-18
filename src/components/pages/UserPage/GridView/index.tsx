import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchUserPhotos from '../../../../store/actionCreators/fetchUserPhotos';
import updatePageNumber
  from '../../../../store/actionCreators/updatePageNumber';
import PostData from '../../../../utils/types/PostData';
import ReduxState from '../../../../utils/types/ReduxState';

import './gridView.css';


class GridView extends React.Component <Props, State>{



  constructor(props: Props){
    super(props);

    this.state = {
      ready: [],
      reachedBottom: false,
    }
  }

  render(){
    return (
      <InfiniteScroll
        hasMore = {!this.props.isRequestFailed && !this.state.reachedBottom}
        useWindow = {true}
        initialLoad = {false}
        loadMore = {() => {
          if(this.props.photosLoading)
            return null;
          if(this.props.data.length === this.props.totalPosts)
          {
            this.setState({reachedBottom: true});
            return null;
          }
          this.props.fetchUserPhotos(this.props.username, this.props.nextPage);   
          }
        }

        loader={
        <div key={0} className="loader">
          <div className="loader-image-container">
          </div>
        </div>
        }
       >

        <div className="grid-wrapper">
          <div className="grid-container">
            {this.renderPhotos(this.props.data)}
          </div>
          {(this.state.reachedBottom)?renderGridBottomMessage(): null}
        </div>
      </InfiniteScroll>

    );
  }


  renderPhotos = (posts: Array<PostData>) => {
    return posts?.map(
      (post,index) => 
    <div className = "grid-view-photo-container" key={post.id} onClick ={() => this.props.onClick(post.id)}>
      <div className="grid-view-photo-overlay">
        <span className="grid-view-heart material-icons material-icons-outlined">favorite</span>
      </div>
        <div className={`grid-view-image-loader-container ${this.state.ready[index]? 'transparent grid-view-back' : 'opaque grid-view-front' }`} >
          <img  src="./loading-icon.svg"  alt=""/>
        </div>
        <img onLoad={this.handleImageLoad}
          src = {post.smallImageURL} alt= {post.alt_description} className ="grid-view-photo"/>
  
    </div>
    )
  }

  handleImageLoad = () => this.setState({ready: [...this.state.ready, true],});
}

const renderGridBottomMessage = () => {
  
  return(
    <div className="grid-view-bottom-message">
    You're all caught up! 
    <span className ="material-icons material-icons-outlined bottom-heart">favorite</span>
  </div>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    username: state.currentUserDetails?.username,
    photosLoading: state.userPhotosLoading,
    detailsLoading: state.userDetailsLoading,
    nextPage: state.nextUserPhotosPage,
    isRequestFailed: state.isRequestFailed,
  }
}

export default connect (mapStateToProps, {fetchUserPhotos, updatePageNumber})(GridView);

type Props = {
  data: Array<PostData>,
  username: string,
  fetchUserPhotos: Function,
  photosLoading: boolean,
  detailsLoading: boolean,
  nextPage: number,
  isRequestFailed: boolean,
  onClick: Function,
  totalPosts?: number,
}
type State = {
  ready: Array<boolean>,
  reachedBottom: boolean,
}
