//assets
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";

const NavBar = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
      <img src={logomark} alt="" height={30} />
      <span>PAYDAY</span>
        
      </NavLink>
      
       
    </nav>
  );
};

export default NavBar;
