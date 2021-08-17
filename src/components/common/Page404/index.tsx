import './page404.css';


const Page404 = () => {

  const message = "The link you followed may be broken, or the page may have been removed.";
  return (

    <div className = "page404-wrapper"> 

      <div className = "page404-heading">
        404 - Page Not Found
      </div>

      <div className = "svg-404" />

      <div className = "page404-message">
        {message}
      </div>

      
    </div>
    
  )
}

export default Page404;