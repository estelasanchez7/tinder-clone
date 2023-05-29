import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color_logo_tinder.png'

const Nav = ({ minimal }) => {
   
  return (
    <nav>
      <div className="logo-container">
        <img src={minimal ? colorLogo : whiteLogo} className="logo" alt='logo'/>
      </div>
    </nav>
  );
};

export default Nav;
