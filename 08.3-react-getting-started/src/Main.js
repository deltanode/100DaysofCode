import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const pets = [
  { name: "meowsalot", species: "cat", age: 5, id: "1" },
  { name: "barkalot", species: "dog", age: 6, id: "2" },
  { name: "fluffy", species: "rabbit", age: 4, id: "3" },
  { name: "pursslot", species: "cat", age: 3, id: "4" },
  { name: "queesalot", species: "cat", age: 2, id: "5" }
]

// Header Component
function Header() {
  return <h1>Application</h1>
}

// Component to display current time (using useState)
function Time() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString())
  setTimeout(function () {
    setTheTime(new Date().toLocaleString())
  }, 1000)
  return (
    <>
      <p>Current Time: {theTime}</p>
    </>
  )
}

// Component to display list (using props)
function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.{" "}
    </li>
  )
}

// Component to increase & decrease Likes (using useState)
function Like() {
  const [likeCount, setLikeCount] = useState(0)

  function increaseLike() {
    setLikeCount(prev => prev + 1)
  }

  function decreaseLike() {
    setLikeCount(function (prev) {
      if (prev > 0) {
        return prev - 1
      }
      return 0
    })
  }
  return (
    <>
      <hr />
      <button onClick={increaseLike}>Increase Like</button>
      <button onClick={decreaseLike}>Decrease Like</button>
      <h2>The page has {likeCount} likes</h2>
    </>
  )
}

// Component to add pets in list using form
function AddPetForm(props) {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Species" />
        <input type="text" placeholder="Age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

// Main Component
function Main() {
  return (
    <>
      <Header />
      <Time />
      <AddPetForm />
      {/* {["Hello", "Hi"]} */}
      {/* {[<li>Hello</li>, <li>Hi</li>]} */}
      <ul>
        {pets.map(pet => (
          <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
        ))}
      </ul>
      <Like />
      z``
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
