import './imageFeed.css';

import React from 'react';

import PostData from '../../../types/PostData';
import ImageCard from './ImageCard/ImageCard';

class ImageFeed extends React.PureComponent<Props>{
  render(){
    return <div className = "feed">{renderPosts(this.props.data)}</div>
  }
}
const renderPosts = (imageDataArray: Array<any>) => {
  return imageDataArray.map(postData => <ImageCard key = {postData.id} data = {postData}/>)
}
export default ImageFeed;

type Props = {
  data: Array<PostData>,
}
