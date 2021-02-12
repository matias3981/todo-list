import './styles.scss';
import moonIcon from '../../assets/icon-moon.svg';

const Header = () => (
   
  <div className="header">
    <h2 className="header__title">TODO</h2>
    <span>
      <img src={moonIcon} />
    </span>
  </div>
 );

export default Header;