import React from 'react'
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Slider = ({ listOfImages }) => {
  const renderListOfImages = () => {
    return listOfImages.map((image, key) => (
      <Carousel.Item key={key}>
        <Card className="mb">
          <LazyLoadImage src={image} />
        </Card>
      </Carousel.Item>
    ))
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
