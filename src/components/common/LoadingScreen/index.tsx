import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ReduxState from '../../../utils/types/ReduxState';


const LoadingScreen = (props: Props) => {
  return(
    <>
      <div>Loading ... </div>
      {props.fetchingDetails? <Redirect to = "/"></Redirect> : null}
    </>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    fetchingDetails: state.userDetailsLoading
  }
}

type Props = {
  fetchingDetails: boolean;
}
export default connect (mapStateToProps,) (LoadingScreen);