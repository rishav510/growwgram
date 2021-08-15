import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import deleteCurrentUser from '../../../store/actionCreators/deleteUserDetails';
import fetchResponseObject
  from '../../../store/actionCreators/fetchResponseObject';
import fetchUserDetails from '../../../store/actionCreators/fetchUserDetails';
import PostData from '../../../utils/types/PostData';
import ReduxState from '../../../utils/types/ReduxState';
import ErrorDialog from '../../common/ErrorDialog/ErrorDialog';
import ImageFeed from '../../common/ImageFeed/ImageFeed';

class NewsFeed extends React.Component <Props>{

  componentDidMount = () => {
    deleteCurrentUser();
  }
  render(){
    
    return (
      <div>  
          <InfiniteScroll 
            loader={
              <div key = {0} className ="loader">
                Loading ...
                <img src = "../../../resources/loading-bar.svg" alt =""/>
              </div>
            }
            loadMore = {() => this.props.fetchResponseObject()}
            useWindow = {true}
            hasMore = {!this.props.isRequestFailed}>
            {<ImageFeed isProfilePicClickable = {true} data = {this.props.postDataList}/>}
            
          </InfiniteScroll>
          {this.props.isRequestFailed?<ErrorDialog/>:null}
      </div>
    );
  }

}

const mapStateToProps = (state: ReduxState) => {
  return {
    postDataList: state.postDataList,
    isRequestFailed: state.isRequestFailed,
  }
}

type Props = {
  postDataList: Array<PostData>,
  isRequestFailed: boolean,
  fetchResponseObject: Function,
}

export default connect (mapStateToProps, {fetchResponseObject,fetchUserDetails, deleteCurrentUser})(NewsFeed);

