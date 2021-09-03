import axios from 'axios'

export const fetchListOfBreeds = async () => {
  console.log('fetchListOfBreeds...')
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    return Object.keys(response.data.message)
  } catch (error) {
    console.error(error)
  }
  console.log('finished fetchListOfBreeds...')
}

export const fetchListOfImages = async (imagesUrl) => {
  console.log('fetchListOfImages...')
  try {
    const response = await axios.get(imagesUrl)
    return response.data.message
  } catch (error) {
    console.error(error)
  }
  console.log('finished fetchListOfImages...')
}

export const fetchListOfSubBreeds = async (breed) => {
  console.log('fetchListOfSubBreeds...')
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
    return response.data.message
  } catch (error) {
    console.error(error)
  }
  console.log('finished fetchListOfSubBreeds...')
}
