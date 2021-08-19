import { connect } from 'react-redux';

import PostData from '../../../../utils/types/PostData';
import ReduxState from '../../../../utils/types/ReduxState';

import SuggestionCard from './SuggestionCard';

import './suggestions.css';


const Suggestions = (props: Props) => {
  return(
    <div className="suggestions-wrapper">
      <div className="suggestions-box">
        <div className = "suggestions-heading" >Suggestions For You</div>
        <div className = "suggestions-list">
          {renderSuggestionsList(props.suggestions.slice(0,5))}
        </div>
      </div>
    </div>
  )
}

const renderSuggestionsList = (usersData: Array<PostData>) => {
  return usersData.map((userData) => {
    const {
      profilePic,
      username,
      id,
    } = userData;
    return <SuggestionCard key = {id} profilePicURL = {profilePic} username = {username}/>
  })
}

const mapStateToProps = (state: ReduxState) => {
  return {
    suggestions: state.suggestions,
  }
}

type Props = {
  suggestions: Array<PostData>
}

export default connect (mapStateToProps)(Suggestions);