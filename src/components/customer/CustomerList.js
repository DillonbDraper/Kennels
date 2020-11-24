import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"


export const CustomerList = () => {
  // This state changes when `getLocations()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(
    () => {
      getCustomers()
    },
    []
  )

  /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
  useEffect(() => {
  }, [customers])

  return (
    <div className="customers">
      {
        customers.map(cust => <Customer key={cust.id} customer={cust} />)
      }
    </div>
  )
}