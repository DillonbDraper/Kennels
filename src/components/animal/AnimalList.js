import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"



export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
        .then ( () => {
            console.log(customers)
        })
    }, [])

    useEffect( () => {

    }, [animals])


  return (
    <div className="animals">
      {
        animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const clinic = locations.find(l => l.id === animal.locationId)
            console.log(owner)
        
            return <Animal key={animal.id}
                        location={clinic}
                        customer={owner}
                        animal={animal} />
        })
      }
      <button onClick={() => props.history.push("/animals/create")}>
        Make Appointment
      </button>
    </div>
  )
}