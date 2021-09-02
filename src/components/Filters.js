import React from 'react'
import { Col, Row, DropdownButton, Dropdown } from 'react-bootstrap'

const Filters = ({
  setNewBreed,
  setNewSubBreed,
  listOfDogs,
  listOfSubBreeds,
  breed,
}) => {
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
        onClick={() => setNewSubBreed(subBreed)}
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
          title={breed.charAt(0).toUpperCase() + breed.slice(1)}
          className="mb-2"
        >
          <Dropdown.Item onClick={() => setNewBreed('Todas las Razas')}>
            Todas las Razas
          </Dropdown.Item>
          {renderListOfDogs()}
        </DropdownButton>
      </Col>

      {listOfSubBreeds.length !== 0 ? (
        <Col md>
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="danger"
            menuVariant="dark"
            title={'Todas las Sub Razas'}
            className="mb-2"
          >
            <Dropdown.Item
              onClick={() => setNewSubBreed('Todas las Sub Razas')}
            >
              Todas las Sub Razas
            </Dropdown.Item>
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
