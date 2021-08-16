import './imageFeed.css';

import React from 'react';

import PostData from '../../../utils/types/PostData';
import ImageCard from './ImageCard/ImageCard';

class ImageFeed extends React.PureComponent<Props>{

  render(){
    return <div className = "feed">{this.renderPosts(this.props.feedData)}</div>
  }
  renderPosts = (imageDataArray: Array<any>) => {
    return imageDataArray.map(postData => <ImageCard isProfilePicClickable = {this.props.isProfilePicClickable} key = {postData.id} postData = {postData}/>)
  }
}

export default ImageFeed;

type Props = {
  feedData: Array<PostData>,
  isProfilePicClickable: boolean,
}

