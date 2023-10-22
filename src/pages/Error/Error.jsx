import './Error.scss';
import { useRouteError, Link } from 'react-router-dom';
import errorImage from '../../assets/svg/undraw-pnf.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    // console.log(error);
    return (
      <div className='error-page'>
        <h2>{error.status}</h2>
        <p>Page {error.statusText}</p>
        <Link to='/' className='error-page--btn'>
          Back to Home
        </Link>
      </div>
    );
  }

  return <div>{error.message}</div>;
};

export default Error;
