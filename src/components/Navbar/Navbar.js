import logo from './NavbarLogo.gif'
import './Navbar.css';

function Navbar(){
  return (
    <div className="Navbar">
        {/* <img src={logo} className="Navbar-logo" alt="logo" /> */}
            <div>
                <a className="Navbar-options" href="" target="_blank">
                Projects
                </a>
            </div>
            <div>
                <a className="Navbar-options" href="" target="_blank">
                About
                </a>
            </div>
            <div>
                <a className="Navbar-options" href="" target="_blank">
                Contact
                </a>
            </div>
    </div>


  );
}

export default Navbar;
/////




// JJ 功課
// add 2 buttons and have it display the number
// 



