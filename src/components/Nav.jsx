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
      {userName && (
        <Form method="post" action="/logout" onSubmit={(event)=> {
          if(!confirm("Delete all user data?")){
            event.preventDefault()
          }
        }}>
          <button type="submit" className="btn btn--warning">
            <span>delete user</span>
            {/* <TrashIcon/> */}
          </button>
        </Form>
      )}
    </nav>
  );
};

export default NavBar;
