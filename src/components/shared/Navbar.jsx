import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import "./navbar.css";
import { links } from "../../utils/constants";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import NavBtns from "./cartbuttons";
import { useState } from "react";
import { NavSideContext } from "../../context/NavContext";
console.log(links);
const NavBar = () => {
  const { togglesideBar, setToggleSideBar, toggleBar } = NavSideContext();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <Link className="logo" to="/">
            <img src={logo} alt="brand" />
          </Link>
          <button className="sidebar-btn" onClick={toggleBar}>
            {togglesideBar ? "" : <FaBars />}
          </button>

          <ul className="links-container">
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
