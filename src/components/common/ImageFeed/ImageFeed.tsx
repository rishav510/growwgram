import './imageFeed.css';

import React from 'react';

import PostData from '../../../utils/types/PostData';
import ImageCard from './ImageCard/ImageCard';

class ImageFeed extends React.PureComponent<Props>{
  render(){
    return <div className = "feed">{this.renderPosts(this.props.data)}</div>
  }
  renderPosts = (imageDataArray: Array<any>) => {
    return imageDataArray.map(postData => <ImageCard isProfilePicClickable = {this.props.isProfilePicClickable} key = {postData.id} data = {postData}/>)
  }
}

export default ImageFeed;

type Props = {
  data: Array<PostData>,
  isProfilePicClickable: boolean,
}
