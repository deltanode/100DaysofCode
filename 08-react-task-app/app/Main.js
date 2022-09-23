import React from "react"
import ReactDOM from "react-dom/client"

// My Components
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Footer from "./components/Footer"

function Main() {
  let taskList = [
    { taskName: "Sample Data 1", taskCategory: "Official" },
    { taskName: "Sample Data 22", taskCategory: "Officialsdsd" }
  ]
  return (
    <>
      <Header />
      <main className="main">
        <Form />
        {taskList.map(data => (
          <List taskName={data.taskName} taskCategory={data.taskCategory} />
        ))}
      </main>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
