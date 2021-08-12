import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';
import fetchResponseObject
  from '../../../store/actionCreators/fetchResponseObject';
import fetchUserDetails from '../../../store/actionCreators/fetchUserDetails';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import ImageFeed from '../../common/ImageFeed/ImageFeed';

class NewsFeed extends React.Component <Props>{

  componentDidMount = () => {
    deleteCurrentUser();
  }
  render(){
    
    return (
      <div>  
          <InfiniteScroll 
            loadMore = {() => this.props.fetchResponseObject()}
            useWindow = {true}
            hasMore = {true}>
            {<ImageFeed data = {this.props.postDataList}/>}
          </InfiniteScroll>
      </div>
    );
  }

}

const mapStateToProps = (state: ReduxState) => {
  return {
    postDataList: state.postDataList,
  }
}

type Props = {
  postDataList: Array<PostData>,
  fetchResponseObject: Function,
}

export default connect (mapStateToProps, {fetchResponseObject,fetchUserDetails, deleteCurrentUser})(NewsFeed);

