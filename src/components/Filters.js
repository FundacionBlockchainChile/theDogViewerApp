import React, { useState } from 'react'
import { Col, Row, DropdownButton, Dropdown } from 'react-bootstrap'

const Filters = ({
  setNewBreed,
  setNewSubBreed,
  listOfDogs,
  listOfSubBreeds,
  breed,
}) => {
  const [subBreedTitle, setsubBreedTitle] = useState(listOfSubBreeds[0])

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const makeNewSubBreeSelection = (subBreed) => {
    setNewSubBreed(subBreed)
    setsubBreedTitle(capitalizeWord(subBreed))
  }

  // FUNCTIONS
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
    <Row>
      <Col md>
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
      </Col>

      {listOfSubBreeds.length > 1 ? (
        <Col md>
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="danger"
            menuVariant="dark"
            title={capitalizeWord(subBreedTitle)}
            className="mb-2"
          >
            {renderListOfSubBreeds()}
          </DropdownButton>
        </Col>
      ) : (
        <div></div>
      )}
    </Row>
  )
}

export default Filters
