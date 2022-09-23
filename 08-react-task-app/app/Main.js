import React from "react"
import ReactDOM from "react-dom/client"

// My Components
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Footer from "./components/Footer"

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Form />
        <List />
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
