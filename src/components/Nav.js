import React from "react";
import Search from "../containers/Search";

const Nav = ({ handleSettingButtonClick, user, darkMode }) => (
  <nav className={darkMode ? "navbar dark" : "navbar"}>
    <div className="col-md-6 col-md-offset-3">
      <Search darkMode={darkMode} />
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
