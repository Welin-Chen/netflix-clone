import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../img/logo.png";
import profile__logo from "../img/profile__logo.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={profile__logo} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
