import React from 'react'
import { Carousel, Card, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import loadingImg from '../assets/loading_gif.gif'
import Loader from './Loader'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

const Slider = ({ listOfImages }) => {
  const renderListOfImages = () => {
    return listOfImages.map((image, key) => {
      return (
        <Carousel.Item key={key}>
          <Card className="mb">
            <LazyLoadImage
              width="100%"
              placeholderSrc={loadingImg}
              src={image}
              effect="black-and-white"
            />
          </Card>
        </Carousel.Item>
      )
    })
  }

  return (
    <div>
      <div>
        <Carousel>{renderListOfImages()}</Carousel>
      </div>
    </div>
  )
}

export default Slider
