import logo from "../../assets/logo.svg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import { NavSideContext } from "../../context/NavContext";
import "./sidebar.css";
const SideBar = () => {
  const { togglesideBar, toggleBar, setToggleSideBar } = NavSideContext();

  let barClass = togglesideBar
    ? "side-bar slide-in"
    : "side-bar translate-away";
  const closebar = () => {
    setToggleSideBar(false);
    barClass = "side-bar translate-away";
  };
  return (
    <>
      <div className={togglesideBar ? "overlay" : ""}></div>
      <aside className={barClass}>
        <header className="bar-header">
          <Link className="logo" to="/" onClick={closebar}>
            <img src={logo} alt="brand" />
          </Link>
          <button className="close-sidebar" onClick={toggleBar}>
            <GrClose />
          </button>
        </header>
        <ul className="side-bar-navs">
          {links.map((link) => (
            <Link to={link.url} key={link.id} onClick={closebar}>
              {link.text}
            </Link>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
