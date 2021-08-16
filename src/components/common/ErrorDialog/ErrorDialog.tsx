import './errorDialog.css';

const ErrorDialog = () => {
  const heading = <>Oops!<br/>Something went wrong...</>;
  const message="Try again in a bit..."
  return(
    <div className="error-dialog-container">
      <h2>{heading}</h2>
      <div className ="error-image-container">
      </div>
      <p>{message}</p>
    </div>
  );
}
export default ErrorDialog;