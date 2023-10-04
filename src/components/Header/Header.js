import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const togthem = () => {
    const toggleThemeButton = document.getElementById('toggle-theme-button');
    const contentDiv = document.getElementById('root');

    toggleThemeButton.addEventListener('click', () => {
        contentDiv.classList.toggle('dark-theme');
        alert("changing");
    });
  }

  return (
    <div className="navbar">
      <span className="logo">
        <img src="https://avatars.githubusercontent.com/u/48170773?s=96&v=4" alt="logo" />
        <h1>Markect Fx</h1>
      </span>
      <div className="toggle-container">
      <FontAwesomeIcon icon={faSun} />
<label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
</label>
<FontAwesomeIcon icon={faMoon} />
    </div>
      <button className="popup_btn">
        <img src="https://img.icons8.com/?size=256&id=TjtYhw4ENJsZ&format=png" />
        {props.totalItems !== 0 ? <span>{props.totalItems}</span> : null}
      </button>
    </div>
  );
}

export default Header;
