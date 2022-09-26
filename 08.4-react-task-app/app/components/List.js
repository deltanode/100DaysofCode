import React from "react"

function List(prop) {
  return (
    <section className="data container">
      <div className="data__box">
        <ul className="data__list">
          <li className="data__item">{prop.taskName}</li>
          <li className="data__item">{prop.taskCategory}</li>
        </ul>
        <button className="data__button">Remove</button>
      </div>
    </section>
  )
}

export default List
