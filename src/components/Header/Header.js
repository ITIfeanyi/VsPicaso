import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  let menu;
  if (navOpen) {
    menu = (
      <div className='nav_container'>
        <div className='nav_subcontainer'>
          <ul className='menu_container'>
            <li className='menu_list'>
              <Link className='menu_link' to='/'>
                Home
              </Link>{" "}
            </li>
            <li className='menu_list'>
              <Link className='menu_link' to='/explore'>
                Explore
              </Link>{" "}
            </li>
            <li className='menu_list'>
              <Link className='menu_link' to='/contact'>
                Contact
              </Link>{" "}
            </li>
            <li className='menu_list'>
              <Link className='menu_link' to='/project'>
                Projects
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='header_container'>
        <div className='header_largeSubcontainer'>
          <header className='header_subcontainer'>
            <div className='logo_container'>vspicaso</div>
            <div className='nav_icon' onClick={handleNavOpen}>
              {navOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </header>
          {menu}
        </div>
      </div>
    </>
  );
};

export default Header;
