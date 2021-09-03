import React, { useState, useEffect } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider'
import { Filters } from './containers/Filters'
import { Landing } from './components/landing'
import Loader from './components/Loader'
import {
  fetchListOfImages,
  fetchListOfBreeds,
  fetchListOfSubBreeds,
} from './javascript/fetchFunctions'

const App = () => {
  const [landing, setLanding] = useState(true)
  const [loading, setloading] = useState(false)
  const [listOfDogs, setListOfDogs] = useState([])
  const [breed, setBreed] = useState('bulldog')
  const [subBreed, setSubBred] = useState(undefined)
  const [listOfImages, setlistOfImages] = useState([])
  const [listOfSubBreeds, setlistOfSubBreeds] = useState([
    'boston',
    'english',
    'french',
  ])

  let imagesUrl = `https://dog.ceo/api/breed/${breed}/images`

  useEffect(() => {
    async function init() {
      setloading(true)
      let listOfDogs = await fetchListOfBreeds()
      setListOfDogs(listOfDogs)
      let listOfImages = await fetchListOfImages(imagesUrl)
      setlistOfImages(listOfImages)
      setloading(false)
    }
    init()
  }, [imagesUrl])

  useEffect(() => {
    async function init() {
      setloading(true)
      setSubBred(undefined)
      let listOfImages = await fetchListOfImages(imagesUrl)
      setlistOfImages(listOfImages)
      let listOfSubBreeds = await fetchListOfSubBreeds(breed)
      setlistOfSubBreeds(['Todas las Sub Razas', ...listOfSubBreeds])
      setloading(false)
    }
    init()
  }, [breed, imagesUrl])

  const setNewBreed = (breed) => {
    setBreed(breed)
  }

  const setNewSubBreed = (subBreed) => {
    if (subBreed === 'Todas las Sub Razas') {
      setSubBred(undefined)
    } else {
      setSubBred(subBreed)
    }
  }

  const filteredImages = () => {
    if (subBreed !== undefined) {
      return listOfImages.filter((imageUrl) => imageUrl.includes(subBreed))
    } else {
      return listOfImages
    }
  }

  return landing ? (
    <Landing setLanding={setLanding} />
  ) : (
    <div className="App">
      <header className="App-header p-4">
        <h1>The Dog Founder</h1>
        <h5>Find your favorite best firend!</h5>
        {loading ? (
          <Container>
            <Loader />
          </Container>
        ) : (
          <Container>
            <Filters
              setNewBreed={setNewBreed}
              setNewSubBreed={setNewSubBreed}
              listOfDogs={listOfDogs}
              listOfSubBreeds={listOfSubBreeds}
              breed={breed}
              subBreed={subBreed}
            />
            <Slider listOfImages={filteredImages()} />
          </Container>
        )}
      </header>
    </div>
  )
}

export default App
