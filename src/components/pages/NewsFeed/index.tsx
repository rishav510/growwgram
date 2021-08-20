import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';
import fetchResponseObject
  from '../../../store/actionCreators/fetchResponseObject';
import fetchSuggestions from '../../../store/actionCreators/fetchSuggestions';
import fetchUserDetails from '../../../store/actionCreators/fetchUserDetails';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import { MemoizedErrorDialog as ErrorDialog } from '../../common/ErrorDialog';
import ImageFeed from '../../common/ImageFeed';

import Suggestions from './Suggestions';

import './newsFeed.css';


class NewsFeed extends React.Component <Props>{

  componentDidMount = () => {
    deleteCurrentUser();
  }

  componentDidUpdate = () => {
    
  }
  
  render(){
    return (
      <div className ="newsfeed-wrapper"> 

    
          <InfiniteScroll 
            loader={
              <div key = {0} className ="loader">
                <div className ="loader-image-container">
                </div>
              </div>
            }
            initialLoad = {true}
            loadMore = {() => this.props.fetchResponseObject()}
            useWindow = {true}
            hasMore = {!this.props.isRequestFailed}>
            {<ImageFeed feedData = {this.props.postDataList}/>}
          </InfiniteScroll>
          <Suggestions/>

          {this.props.isRequestFailed?<ErrorDialog/>:null}

      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {

  return {
    postDataList: state.feedData,
    isRequestFailed: state.isRequestFailed,
  }
}

type Props = {
  postDataList: Array<PostData>,
  isRequestFailed: boolean,
  fetchResponseObject: () => {},
  fetchSuggestions: () => {},
}

export default connect (mapStateToProps, {fetchResponseObject,fetchUserDetails, deleteCurrentUser, fetchSuggestions})(NewsFeed);

