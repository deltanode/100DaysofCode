import React from "react"

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {" "}
          100DayOfCode{" "}
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                {" "}
                HTML{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {" "}
                CSS{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {" "}
                JS{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {" "}
                GITHUB{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
