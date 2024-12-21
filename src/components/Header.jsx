import "../styles/Header.scss";
import React from "react";

function Header({ onLanguageChange, language  }) {

  return (
    <div className="container-header">
      <header>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Belarmina &nbsp;</span>
          <span aria-hidden="true" className="front-text">
            &nbsp;Belarmina&nbsp;
          </span>
        </button>
        <div className="acoes">
          <select value={language} onChange={onLanguageChange}>
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default Header;
