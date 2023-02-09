import logo from "../../assets/logo.svg";
import "./navbar.css";
//sidebar btn
import { FaBars } from "react-icons/fa";
//ul navs
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";
import NavBtns from "./cartbuttons";
import { useState } from "react";
import { NavSideContext } from "../../context/NavContext";
const NavBar = () => {
  //mobile to desktop qurey
  const { togglesideBar, setToggleSideBar, toggleBar } = NavSideContext();

  //nav bg changin functionality
  const [scrolled, setScrolled] = useState(false);
  const navClass = scrolled ? "nav nav-bg-2" : "nav nav-bg-1";
  const handleScroll = () => {
    window.scrollY > 90 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={navClass}>
      <div className="container">
        <div className="nav-container d-flex ">
          <Link className="logo" to="/">
            <img src={logo} alt="comfy store brand logo" />
          </Link>
          <button className="sidebar-btn" onClick={toggleBar}>
            {togglesideBar ? "" : <FaBars />}
          </button>

          <ul className="links-container d-flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <NavBtns />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
