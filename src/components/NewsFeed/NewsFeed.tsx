import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import deleteCurrentUser
  from '../../stateManagement/actionCreators/deleteUserDetails';
import fetchResponseObject
  from '../../stateManagement/actionCreators/fetchResponseObject';
import fetchUserDetails
  from '../../stateManagement/actionCreators/fetchUserDetails';
import ImageFeed from '../common/ImageFeed/ImageFeed';

class NewsFeed extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      imageObject: null,
      imageDataArray: [],

    }
  }

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

type Props = any;
type State = {
  imageObject?: any,
  imageDataArray?: any,
};

const mapStateToProps = (state:any) => {
  
  return {
    postDataList: state.postDataList,
  }

}

export default connect (mapStateToProps, {fetchResponseObject,fetchUserDetails, deleteCurrentUser})(NewsFeed);

