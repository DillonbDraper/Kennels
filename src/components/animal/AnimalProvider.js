import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {

  const [animals, setAnimals] = useState([]) 
  const [ searchTerms, setTerms ] = useState("")
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then(res => res.json())
      .then(setAnimals)
      // .then(parsedLocations => setLocations(parsedLocations))
  }

  const addAnimal = animal => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals)
  }

  const releaseAnimal = animalId => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
        method: "DELETE"
    })
        .then(getAnimals)
}

  const getAnimalById = (id) => {
    return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
        .then(res => res.json())
}

const updateAnimal = animal => {
  return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
  })
      .then(getAnimals)
}

  /*
      You return a context provider which has the
      `locations` state, the `addLocation` function,
      and the `getLocation` function as keys. This
      allows any child elements to access them.
  */
  return (
    <AnimalContext.Provider value={
      {
      animals, releaseAnimal, addAnimal, getAnimals, getAnimalById, searchTerms, setTerms, updateAnimal
      }
    }>
      {props.children}
    </AnimalContext.Provider>
  )
}