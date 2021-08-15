import './imageCard.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import '../../../../../resources/loading-icon.svg';

import React from 'react';

import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import displayPopup from '../../../../store/actionCreators/displayPopup';
import fetchUserDetails
  from '../../../../store/actionCreators/fetchUserDetails';
import fetchUserPhotos from '../../../../store/actionCreators/fetchUserPhotos';
import PostData from '../../../../utils/types/PostData';

class ImageCard extends React.PureComponent <Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      hasImageLoaded: false,
      liked: false,
    }
  }

  render(){
    return (
      <div className="card-container">
        {this.renderPostHeader()}
        {this.renderImageContainer()}
        {this.renderPostFooter()}
      </div>
    );
  }

  renderPostHeader = () => {
    return (
      <div className="post-header">
        <div className="user-header-flex">
          <Link to = "/user">
            <img src={this.props.data?.profilePic} className="user-profile-pic" alt={this.props.data?.alt_description} 
            onClick = {() => {this.props.fetchUserDetails(this.props.data?.username)}}/>
          </Link>
          <div className = "user-header-text">
            <Link to = "/user">
              <span className="username row">{this.props.data?.username}</span>
            </Link>
            <span className="location row">{this.props.data?.location}</span>
          </div>
        </div>
      </div>
    );
  }

  renderImageContainer = () => {
    return (
      <div className="image-container">
        <div className={`image-loader-container ${this.state.hasImageLoaded? 'transparent' : 'opaque' }`} >
          <img  src="./loading-icon.svg" alt=""/>
        </div>
        <img onLoad = {() => this.handleLoad()} className="image"  src={this.props.data?.imageURL} alt={this.props.data?.alt_description} />
      </div>
    );
  }

  handleLoad = () => {
    this.setState({hasImageLoaded: true});
    console.log('handleLoad ran ... ');
  }

  renderPostFooter = () => {

    return (
      <div className="post-footer">
          <section className="button-tray">
            <span className={`
            material-icons-outlined material-icons heart
            ${this.state.liked?'red':''}
            `} 
            onClick = {this.handleLike}>
            {this.state.liked?"favorite":"favorite_border"}
            </span>
            <span className="material-icons-outlined material-icons comment"
            onClick = {() => this.props.displayPopup()}>chat_bubble_outline</span>
            <span className="material-icons-outlined material-icons share"
            onClick = {() => this.props.displayPopup()}>send</span>
            <div className="bookmark-container">
              <span className="material-icons-outlined material-icons bookmark"
              onClick = {() => this.props.displayPopup()}>turned_in</span>
            </div>
          </section>
          <section className="likes">
            <span className="number-of-likes">{this.props.data?.likes}</span>likes
          </section>
          {this.renderCaption()}
          <div className = "date">{this.renderDate(this.props.data?.created_at)}</div>
        </div>
    );
  }

  renderCaption = () => {
    return (this.props.data.caption)?
      (
        <section className="caption-container">
            <span className="caption">
              <span className="bold space-right">
                {this.props.data?.username}
              </span>
              {this.props.data?.caption}
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
}

type State = {
  hasImageLoaded: boolean,
  liked: boolean,
}

type Props = {
  data: PostData,
  fetchUserDetails: Function,
  fetchUserPhotos: Function,
  displayPopup: Function,
  isProfilePicClickable: boolean,
}

export default connect (null, {displayPopup, fetchUserDetails, fetchUserPhotos})(ImageCard);
