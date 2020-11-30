import React from "react"
import "./Employee.css"

export const Employee = ({employee, location, animal}) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">At: {location.name}</div>
<div className="cared__animal">Caring for: {animal.name}</div>
  </section>
)
