import React from "react"
import Header from "./Header.js"
import Time from "./Time.js"
import Pet from "./Pet.js"

function App() {
  const pets = [
    { name: "Meowsalot", species: "Cat", age: 3, id: 1 },
    { name: "Barkslot", species: "Dog", age: 5, id: 2 },
    { name: "Fluffy", species: "Rabbit", age: 1, id: 3 },
    { name: "Purrsload", species: "Cat", age: 4, id: 4 },
    { name: "Paws", species: "Dog", age: 6, id: 5 }
  ]
  return (
    <>
      <Header />
      <Time />
      <ul>
        {pets.map(pet => (
          <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
        ))}
      </ul>
    </>
  )
}

export default App
