import React from "react"

function Form() {
  return (
    <section className="task container">
      <h1 className="task__title">Task List</h1>
      <form action="#" className="task__form">
        <div>
          <label className="task__label" for="taskName">
            Task
          </label>
          <input className="task__input" type="text" name="taskName" placeholder="Enter Task.." />
        </div>
        <div>
          <label className="task__label" for="taskCategory">
            Category
          </label>
          <input className="task__input" type="text" name="taskCategory" placeholder="Eg: Official.." />
        </div>
        <div>
          <input className="task__submit" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  )
}

export default Form
