import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };
  const handlePackage = () => {
    setPackageOpen(!packageOpen);
  };
  let menu;
  if (navOpen) {
    menu = (
      <div className='nav_container'>
        <div className='nav_subcontainer'>
          <ul className='menu_container'>
            <li className='menu_list' onClick={handleNavOpen}>
              <Link className='menu_link' to='/'>
                Home
              </Link>{" "}
            </li>
            <li className='menu_list' onClick={handleNavOpen}>
              <Link className='menu_link' to='/explore'>
                Explore
              </Link>{" "}
            </li>

            <li className='menu_list'>
              <p className='menu_link_p' onClick={handlePackage}>
                Package
                {packageOpen ? (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className='menu_link_icon'
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className='menu_link_icon'
                  />
                )}
              </p>
            </li>
            {packageOpen && (
              <ul>
                <li className='menu_list' onClick={handleNavOpen}>
                  <Link className='menu_link subPackageLink' to='/wedding'>
                    Wedding
                  </Link>{" "}
                </li>
                <li className='menu_list' onClick={handleNavOpen}>
                  <Link className='menu_link subPackageLink' to='/birthdays'>
                    Birthdays
                  </Link>{" "}
                </li>
                <li className='menu_list' onClick={handleNavOpen}>
                  <Link className='menu_link subPackageLink' to='/studio-shoot'>
                    Studio Shoot
                  </Link>{" "}
                </li>
              </ul>
            )}
            <li className='menu_list' onClick={handleNavOpen}>
              <Link className='menu_link' to='/contact'>
                Contact
              </Link>{" "}
            </li>
            <li className='menu_list' onClick={handleNavOpen}>
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
