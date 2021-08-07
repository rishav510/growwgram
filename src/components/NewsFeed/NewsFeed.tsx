import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import fetchResponseObject
  from '../../stateManagement/actionCreators/fetchResponseObject';
import ImageFeed from '../common/ImageFeed/ImageFeed';

class NewsFeed extends React.Component <Props,State>{

  constructor(props:Props){
    super(props);
    this.state = {
      imageObject: null,
      imageDataArray: [],
    }
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
  console.log(state);
  return {
    postDataList: state.postDataList,
  }

}

export default connect (mapStateToProps, {fetchResponseObject})(NewsFeed);

