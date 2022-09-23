import React from "react"

function List() {
  return (
    <section className="data container">
      <div className="data__box">
        <ul className="data__list">
          <li className="data__item">Sample Task</li>
          <li className="data__item">Offical</li>
        </ul>
        <button className="data__button">Remove</button>
      </div>
      <div className="data__box">
        <ul className="data__list">
          <li className="data__item">Sample Task</li>
          <li className="data__item">Offical</li>
        </ul>
        <button className="data__button">Remove</button>
      </div>
    </section>
  )
}

export default List
