import { Link, useRouteError } from 'react-router-dom';
import '../Error/Error.scss';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='error-page error-page--single'>
      {/* <h2>{error}</h2> */}
      <p>{error.message}</p>
      <Link to='/' className='error-page--btn'>
        Back to Home
      </Link>
    </div>
  );
};

export default SinglePageError;
