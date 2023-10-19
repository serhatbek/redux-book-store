import '../Header/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/'>
            BOOK
            <span>ERA</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
