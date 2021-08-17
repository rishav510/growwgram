import { connect } from 'react-redux';

import displayPopup from '../../../store/actionCreators/displayPopup';


const StubButton = (props: Props) =>  {

  return (
    (props.isButton)?
    (
      <button className = {(props.isIcon? `material-icons material-icons-outlined `: '') + props.additionalCSS}
      onClick = {() => {props.displayPopup()}}>
      {props.name}
      </button>
    ):
    (
      <span className = {(props.isIcon? `material-icons material-icons-outlined `: '') + props.additionalCSS}
      onClick = {() => {props.displayPopup()}}>
      {props.name}
      </span>
    )
  )
}


type Props = {
  name: string,
  additionalCSS?: string,
  displayPopup: Function,
  isIcon: boolean;
  isButton?: boolean;
}

export default connect(null, {displayPopup})(StubButton);