import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"



export const EmployeeList = () => {
  // This state changes when `getLocations()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      getEmployees()
    },
    []
  )

  /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
  useEffect(() => {
  }, [employees])

  return (
    <div className="employees">
      {
        employees.map(emp => <Employee key={emp.id} employee={emp} />)
      }
    </div>
  )
}