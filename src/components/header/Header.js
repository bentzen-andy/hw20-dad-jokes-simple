import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <ul>
        <li>HW20 - Dad Jokes (Normal API call)</li>
        <li>
          <a href="https://github.com/bentzen-andy/hw20-dad-jokes-simple">
            Github
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
