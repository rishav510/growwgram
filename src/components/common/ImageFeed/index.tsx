import React, { RefObject } from 'react';

import PostData from '../../../utils/types/PostData';

import ImageCard from './ImageCard';

import './imageFeed.css';


class ImageFeed extends React.Component<Props, State>{

  constructor(props: Props){
    super(props);
    this.state ={
      scroll: false,
    }
    
  }

  render(){
    return <div className = "feed">{this.renderPosts(this.props.feedData)}</div>
  }
  renderPosts = (imageDataArray: Array<PostData>) => {
    return imageDataArray.map(postData => <ImageCard focusOn = {this.props.focusOn} focusCb = {this.focusCb}
       key = {postData.id} postData = {postData}/>)
  }

  focusCb = (focusRef: RefObject<HTMLDivElement>) => {
    focusRef.current?.scrollIntoView({block: "center"});
  }
}

export default ImageFeed;

type Props = {
  focusOn?: string,
  feedData: Array<PostData>,
}

type State = {
  scroll: boolean,
}