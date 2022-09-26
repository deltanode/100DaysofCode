import React from "react"

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="https://deltanode.github.io/100DaysofCode/" className="nav__logo">
          100DayOfCode
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="https://github.com/deltanode/100DaysofCode/tree/main/08-react-task-app" className="nav__link">
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
