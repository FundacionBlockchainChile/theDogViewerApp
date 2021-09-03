import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { capitalizeWord } from '../javascript/helperFunctions'

export const BreedFilter = ({ listOfDogs, setNewBreed, breed }) => {
  const renderListOfDogs = () => {
    return listOfDogs.map((dogBreed, key) => (
      <Dropdown.Item
        onClick={() => setNewBreed(dogBreed)}
        key={key}
        value={dogBreed}
      >
        {dogBreed.charAt(0).toUpperCase() + dogBreed.slice(1)}
      </Dropdown.Item>
    ))
  }

  return (
    <DropdownButton
      id="dropdown-button-dark-example2"
      variant="success"
      menuVariant="dark"
      title={capitalizeWord(breed)}
      className="mb-2"
    >
      <Dropdown.Item onClick={() => setNewBreed('Todas las Razas')}>
        Todas las Razas
      </Dropdown.Item>
      {renderListOfDogs()}
    </DropdownButton>
  )
}
