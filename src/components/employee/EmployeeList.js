import React, { useContext, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"



export const EmployeeList = (props) => {
  // This state changes when `getLocations()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      getAnimals().then(getLocations).then(getEmployees)
      .then(() => {
      })
    },
    []
  )


  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
        </button>
      <article className="employeeList">
        {
          employees.map(employee => {
            const animal = animals.find(ani => ani.id === employee.animalId)
            const location = locations.find(loc => loc.id === employee.locationId)

            return <Employee key={employee.id} employee={employee} animal={animal} location={location} />
          }
          )
        }


      </article>
    </div>
  )
}