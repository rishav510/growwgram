import React, { RefObject } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { DateTime } from 'luxon';

import displayPopup from '../../../../store/actionCreators/displayPopup';
import fetchUserDetails
  from '../../../../store/actionCreators/fetchUserDetails';
import fetchUserPhotos from '../../../../store/actionCreators/fetchUserPhotos';
import Action from '../../../../utils/types/Action';
import PostData from '../../../../utils/types/PostData';
import StubButton from '../../StubButton';

import './imageCard.css';
import 'react-placeholder/lib/reactPlaceholder.css';


class ImageCard extends React.Component <Props, State> {

  focusRef: RefObject<HTMLDivElement> = React.createRef();
  constructor(props: Props){
    super(props);
    this.state = {
      hasImageLoaded: false,
      liked: false,
    }
  }

  componentDidMount = () => {
    (this.focusRef.current !== null)?
    this.props.focusCb(this.focusRef):console.log();
    this.focusRef = React.createRef();
  }

  render(){
    return (
      <div ref = {(this.props.focusOn === this.props.postData.id)? this.focusRef: null}
      className="card-container">
        {this.renderPostHeader()}
        {this.renderImageContainer()}
        {this.renderPostFooter()}
      </div>
    );
  }

  renderPostHeader = () => {
    const {postData} = this.props;
    return (
      <div className="post-header">
        <div className="user-header-flex">
          <Link to = {postData.username} >
            <img src={postData?.profilePic} className="user-profile-pic" alt={postData?.alt_description} 
            onClick = {this.handleUserInfoClick}/>
          </Link>
          <div className = "user-header-text">
            <Link to = {postData.username}>
              <span className="username row"
              onClick ={this.handleUserInfoClick} >{postData?.username}</span>
            </Link>
            <span className="location row">{postData?.location}</span>
          </div>
        </div>
      </div>
    );
  }

  renderImageContainer = () => {
    const {postData} = this.props;
    return (
      <div className="image-container">
        <div className={`image-loader-container ${this.state.hasImageLoaded? 'transparent' : 'opaque' }`} >
        </div>
        <img onLoad = {() => this.handleLoad()} className="image"  src={postData?.bigImageURL} alt={postData?.alt_description} />
      </div>
    );
  }

  handleLoad = () => {
    this.setState({hasImageLoaded: true});
  }

  renderPostFooter = () => {
    const {postData} = this.props;
    return (
      <div className="post-footer">
          <section className="button-tray">
            <span 
            className={`
              material-icons-outlined material-icons heart
              ${this.state.liked?'red':''}
            `} 
            onClick = {this.handleLike}>
              {this.state.liked?"favorite":"favorite_border"}
            </span>

            <StubButton isIcon = {true} name = "chat_bubble_outline" additionalCSS = "comment"/>

            <StubButton isIcon = {true} name = "send" additionalCSS = "share"/>

            <div className="bookmark-container">
              <StubButton isIcon = {true} name = "turned_in" additionalCSS = "bookmark"/>
            </div>

          </section>

          <section className="likes">
            <span className="number-of-likes">{postData?.likes}</span>likes
          </section>
          
          {this.renderCaption()}
          <div className = "date">{this.renderDate(postData?.created_at)}</div>
        </div>
    );
  }

  renderCaption = () => {
    const {postData} = this.props;
    return (postData.caption)?
      (
        <section className="caption-container">
            <span className="caption">
              <span className="bold space-right">
                {postData?.username}
              </span>
              {postData?.caption}
            </span>
          </section>
      ):
      null;
  }

  renderDate = (date: string) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATE_FULL);
  }

  handleLike = () => {
    this.setState({liked:true});
    setTimeout(()=>{this.setState({liked:false})},600);
  }

  handleUserInfoClick = () => {
    const {postData} = this.props;
    this.props.fetchUserDetails(postData?.username);
  }

  handleStubButton = () => {
    this.props.displayPopup();
  }
}

type State = {
  hasImageLoaded: boolean,
  liked: boolean,
}

type Props = {
  focusCb: Function,
  focusOn?: string,
  postData: PostData,
  fetchUserDetails: (username: string) => Action | Promise<void>,
  fetchUserPhotos: (username: string, nextPage: number) => Action | Promise<void>
  displayPopup: () => Action,
}

export default connect (null, {displayPopup, fetchUserDetails, fetchUserPhotos})(ImageCard);
