import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    console.log(error);
    return (
      <div>
        <Link to='/'>Back to Home</Link>
        <div>{error.status}</div>
        <div>Page {error.statusText}</div>
      </div>
    );
  }

  return <div>{error.message}</div>;
};

export default Error;
