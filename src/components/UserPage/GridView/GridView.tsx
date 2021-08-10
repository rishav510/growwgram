import './gridView.css';

import { connect } from 'react-redux';

const GridView = (props: Props) => {
 console.log(props.photos);
 return(
   <div className="grid-container">
     {renderPhotos(props.photos)}
   </div>
 );
}

const renderPhotos = (photos: Array<any> | null) => {
  return photos?.map(photo => <img className = "grid-view-photo" src = {photo.urls.raw} alt = "something"/>)
}
const mapStateToProps = (state: any) => {
  return {
    photos: state.currentUserPhotos,
  }
}
export default connect (mapStateToProps)(GridView);


type Props = any;
