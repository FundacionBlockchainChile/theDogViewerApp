import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BreedFilter } from '../components/breedFilter'
import { SubBreedFilter } from '../components/subBreedFilter'

export const Filters = ({
  setNewBreed,
  setNewSubBreed,
  listOfDogs,
  listOfSubBreeds,
  breed,
}) => {
  return (
    <Row>
      <Col md>
        <BreedFilter
          listOfDogs={listOfDogs}
          setNewBreed={setNewBreed}
          breed={breed}
        />
      </Col>

      {listOfSubBreeds.length > 1 ? (
        <Col md>
          <SubBreedFilter
            listOfSubBreeds={listOfSubBreeds}
            setNewSubBreed={setNewSubBreed}
            breed={breed}
          />
        </Col>
      ) : (
        <div></div>
      )}
    </Row>
  )
}
