import React, { useState } from "react"
import ReactDOM from "react-dom/client"

// Header Component
function Header() {
  return <h1 className="orange">Application</h1>
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
      <button onClick={increaseLike}>Increase Like</button>
      <button onClick={decreaseLike}>Decrease Like</button>
      <h2>The page has {likeCount} likes</h2>
    </>
  )
}

// Component to add pets in list using form
function AddPetForm(props) {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    props.setPets(prev => prev.concat({ name, species, age, id: Date.now() }))
    setName("")
    setSpecies("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="Species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

// Main Component
function Main() {
  const [pets, setPets] = useState([
    { name: "meowsalot", species: "cat", age: 5, id: "1" },
    { name: "barkalot", species: "dog", age: 6, id: "2" },
    { name: "fluffy", species: "rabbit", age: 4, id: "3" },
    { name: "pursslot", species: "cat", age: 3, id: "4" },
    { name: "queesalot", species: "cat", age: 2, id: "5" }
  ])
  return (
    <>
      <Header />
      <Time />
      <Like />
      <AddPetForm setPets={setPets} />
      {/* {["Hello", "Hi"]} */}
      {/* {[<li>Hello</li>, <li>Hi</li>]} */}
      <ul>
        {pets.map(pet => (
          <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
