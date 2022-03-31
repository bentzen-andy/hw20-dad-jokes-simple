import React from "react";
import css from "./Header.module.css";

const Header = ({ loggedInStatus }) => {
  return (
    <React.Fragment>
      <header className={css["header"]}>
        <ul>
          <li>HW20</li>
          <li>
            <a href=""> Github</a>
          </li>
        </ul>
      </header>
      <hr />
    </React.Fragment>
  );
};

export default Header;
