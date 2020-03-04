import React from "react";
import Search from "./Search";

const Nav = ({
  handleSearchInputChange,
  handleSettingButtonClick,
  user,
  darkMode
}) => (
  <nav className={darkMode ? "navbar dark" : "navbar"}>
    <div className="col-md-6 col-md-offset-3">
      <Search
        handleSearchInputChange={handleSearchInputChange}
        darkMode={darkMode}
      />
    </div>

    <span>{user ? user.name : ""}님이 로그인했습니다.</span>
    <button
      className={darkMode ? "btn btn-dark" : "btn btn-light"}
      onClick={handleSettingButtonClick}
    >
      Setting
    </button>
  </nav>
);

export default Nav;
