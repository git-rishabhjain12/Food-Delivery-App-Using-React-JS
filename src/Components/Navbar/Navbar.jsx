import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <>
      <nav>
        <div id="navbar">
          <img src={assets.logo_300x300_transparent} alt="" className="logo" />

          <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
          </ul>

          <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" className="basket_icon" />
              <div className="dot"></div>
            </div>

            <button className="sign-in-btn">Sign In</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
