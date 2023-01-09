import "./styles.css";
import "@popperjs/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar bg-primary navbar-container">
        <Link to="/">
          <h3>Github API</h3>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
