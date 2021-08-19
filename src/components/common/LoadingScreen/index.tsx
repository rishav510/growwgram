import { connect } from 'react-redux';

import ReduxState from '../../../utils/types/ReduxState';
import {
  MemoizedUserDetailsPlaceholder
} from '../../pages/UserPage/UserDetailsPlaceholder';

import './loadingScreen.css';


const LoadingScreen = (props: Props) => {
  return(
    <div className = "user-page-wrapper">
      <MemoizedUserDetailsPlaceholder/>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    pageLoading: state.userDetailsLoading
  }
}

type Props = {
  fetchingDetails: boolean;
}
export default connect (mapStateToProps,) (LoadingScreen);