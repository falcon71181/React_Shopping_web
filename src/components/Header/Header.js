import React, { useEffect } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  useEffect(() => {
    const toggleThemeButton = document.getElementById('toggle-theme-button');
    const contentDiv = document.getElementById('root');
    const contentNav = document.getElementById('nav-bar');
    const contentItem = document.getElementById('item-container-theme');

    const toggleTheme = () => {
      contentDiv.classList.toggle('dark-theme');
      contentNav.classList.toggle('nav-dark-theme');
      contentItem.classList.toggle('item-container-dark');
    };

    toggleThemeButton.addEventListener('click', toggleTheme);

    return () => {
      toggleThemeButton.removeEventListener('click', toggleTheme);
    };
  }, []);

  return (
    <div className="navbar" id="nav-bar">
      <span className="logo">
        <img src="https://avatars.githubusercontent.com/u/48170773?s=96&v=4" alt="logo" />
        <h1>Market Fx</h1>
      </span>
      <div className="toggle-container">
        <FontAwesomeIcon icon={faSun} />
        <label className="switch">
          <input type="checkbox" id="toggle-theme-button" />
          <span className="slider round"></span>
        </label>
        <FontAwesomeIcon icon={faMoon} />
      </div>
      <button className="popup_btn" onClick={props.onPopup}>
        <img src="https://img.icons8.com/?size=256&id=TjtYhw4ENJsZ&format=png" alt="cart icon" />
        {props.totalItems !== 0 ? <span>{props.totalItems}</span> : null}
      </button>
    </div>
  );
}

export default Header;
