import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <button className="homepagebuttons">
        <Link className='link'link to="/">Go back to Home</Link>
      </button>
    </div>
  );
};

export default NavBar;
