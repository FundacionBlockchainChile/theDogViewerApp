import React from 'react'
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <Card className="mb">
              <Card.Img
                variant="top"
                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_11817.jpg"
              />
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="mb">
              <Card.Img
                variant="top"
                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_3738.jpg"
              />
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="mb">
              <Card.Img
                variant="top"
                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_4103.jpg"
              />
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Slider
