import './imageCard.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import React from 'react';

import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import fetchUserDetails
  from '../../../../stateManagement/actionCreators/fetchUserDetails';
import fetchUserPhotos
  from '../../../../stateManagement/actionCreators/fetchUserPhotos';
import PostData from '../../../../types/PostData';

class ImageCard extends React.PureComponent <Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      ready: true,
    }
  }
  render(){
    return (
      <div className="card-container">
        {this.renderPostHeader()}
        <div className="image-container">
          {this.renderImageContainer()}
        </div>
        {this.renderPostFooter()}
      </div>
    );
  }
  renderPostHeader = () => {
    console.log(this.state);
    return (
      <div className="post-header">
        <div className="user-header-flex">
          <Link to = "/user">
            <img src={this.props.data?.profilePic} className="user-profile-pic" alt={this.props.data?.alt_description} onClick = {() => {
              this.props.fetchUserPhotos(this.props.data?.username,1);
              this.props.fetchUserDetails(this.props.data?.username)}}/>
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
        <img className="image"  src={this.props.data?.imageURL} alt={this.props.data?.alt_description} />
      </div>
    );
  }

  handleLoad = () => {
    this.setState({ready: true});
    console.log('handleLoad ran ... ');
  }
  renderPostFooter = () => {
    return (
      <div className="post-footer">
          <section className="button-tray">
            <span className="material-icons-outlined material-icons heart">favorite_border</span>
            <span className="material-icons-outlined material-icons comment">chat_bubble_outline</span>
            <span className="material-icons-outlined material-icons share">send</span>
            <div className="bookmark-container">
              <span className="material-icons-outlined material-icons bookmark">turned_in</span>
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
}



type State = {
  ready: boolean,
}

type Props = {
  data: PostData,
  fetchUserDetails: Function,
  fetchUserPhotos: Function,
}



export default connect (null, {fetchUserDetails, fetchUserPhotos})(ImageCard);
