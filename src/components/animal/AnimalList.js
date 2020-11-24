import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"


export const AnimalList = () => {
  // This state changes when `getLocations()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      getAnimals()
    },
    []
  )

  /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
  useEffect(() => {
  }, [animals])

  return (
    <div className="animals">
      {
        animals.map(animal => <Animal key={animal.id} animal={animal} />)
      }
    </div>
  )
}