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
  constructor(props: Props){
    super(props);
    this.state = {
      ready: []
    }
  }

  render(){
    return (
      <InfiniteScroll
        hasMore = {!this.props.isRequestFailed}
        useWindow = {true}
        initialLoad = {false}
        loadMore = {() => {
          if(this.props.photosLoading)
            return null;
          this.props.fetchUserPhotos(this.props.username, this.props.nextPage);
          console.log(this.props.nextPage, this.props.photosLoading);
        }
        }
        loader = {<div key ={0} className = "loader">Loading ...</div>}
      >
        <div className="grid-wrapper">
          <div className="grid-container">
            {this.renderPhotos(this.props.data)}
          </div>
        </div>
      </InfiniteScroll>
    );
  }

  renderPhotos = (posts: Array<PostData>) => {
    console.log(posts);
    return posts?.map((post,index) => <div className = "grid-view-photo-container" key={post.id}>
        <div className={`grid-view-image-loader-container ${this.state.ready[index]? 'transparent' : 'opaque' }`} >
          <img  src="./loading-icon.svg" alt=""/>
        </div>
        <img onLoad={() => 
          {this.setState({ready: [...this.state.ready, true],})}}
          src = {post.imageURL} alt= {post.alt_description} className ="grid-view-photo"/>
      </div>
      
      )
  }

  // handleLoad = () => {
  //   if(!this.props.photosLoading && !this.props.detailsLoading)
  //     this.props.fetchUserPhotos(this.props.username, this.props.nextPage);
  // }
  
}




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
}
type State = {
  ready: Array<boolean>,
}
