import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div>
        <Link to='/'>Back to Home</Link>
      </div>
    );
  }

  return <div>{error.message}</div>;
};

export default Error;
