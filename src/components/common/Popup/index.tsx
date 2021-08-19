import React from 'react';
import { connect } from 'react-redux';

import removePopup from '../../../store/actionCreators/removePopup';
import ReduxState from '../../../utils/types/ReduxState';

import './popup.css';


const Popup = (props: Props) => {

  const heading = "Hang on!";
  const message = "We're still working on this feature. You'll soon be able to use it!"
  return (
    <div className={`
    whole-page-wrapper
    ${props.visible? 'visible' : ''}
    `}
    onClick = {() => props.removePopup()}
    >
      <div className="popup-container">

        <h2>{heading}</h2>
        <div className="popup-image-container"></div>
        <p>{message}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    visible: state.popupDisplayed,
  }
}

type Props = {
  visible: boolean,
  removePopup: () => {},
}

const connectedPopup = connect (mapStateToProps, {removePopup})(Popup);
export const MemoizedPopup = React.memo(connectedPopup);