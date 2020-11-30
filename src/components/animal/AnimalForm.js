import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const dogBreed = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const makeAppointment = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(localStorage.getItem("kennel_customer"))
        const breed = dogBreed.current.value

        if (locationId === 0 || name === null) {
            window.alert("Please make sure to input animal name and choose a location")
        } else {
            addAnimal({
                name: name.current.value,
                locationId,
                customerId,
                breed
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
        <h2 className="animalForm__title">New animal</h2>
        <fieldset>           
            <div className="form-group">
                <label htmlFor="animalName">animal name: </label>
                <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="animal name" />
            </div>
        </fieldset>
        <fieldset>           
            <div className="form-group">
                <label htmlFor="animalBreed">animal breed: </label>
                <input type="text" id="animalName" ref={dogBreed} required autoFocus className="form-control" placeholder="animal breed" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <button type="submit"
                onClick={evt => {
                    console.log("hello")
                    evt.preventDefault() // Prevent browser from submitting the form
                    makeAppointment()
                }}
                className="btn btn-primary">
                Make Appointment
            </button>
        </form>
    )
}