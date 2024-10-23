const ErrorPage = ({ searchParams }) => {
    const error = searchParams.error;
  
    return (
      <div>
        <h1>Authentication Error</h1>
        <p>{error ? error : 'An unknown error occurred.'}</p>
      </div>
    );
  };
  
  export default ErrorPage;
  