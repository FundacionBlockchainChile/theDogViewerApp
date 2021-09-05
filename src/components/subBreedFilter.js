import React, { useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { capitalizeWord } from '../javascript/helperFunctions'

export const SubBreedFilter = ({ listOfSubBreeds, setNewSubBreed }) => {
  const [subBreedTitle, setsubBreedTitle] = useState(listOfSubBreeds[0])

  const makeNewSubBreeSelection = (subBreed) => {
    setNewSubBreed(subBreed)
    setsubBreedTitle(capitalizeWord(subBreed))
  }
  const renderListOfSubBreeds = () => {
    return listOfSubBreeds.map((subBreed, key) => (
      <Dropdown.Item
        onClick={() => makeNewSubBreeSelection(subBreed)}
        key={key}
        value={subBreed}
      >
        {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}
      </Dropdown.Item>
    ))
  }

  return (
    <DropdownButton
      id="dropdown-button-dark-example2"
      variant="warning"
      menuVariant="dark"
      title={capitalizeWord(subBreedTitle)}
      className="mb-2"
    >
      {renderListOfSubBreeds()}
    </DropdownButton>
  )
}
