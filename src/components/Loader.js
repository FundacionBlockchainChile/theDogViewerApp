import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="mt-4">
      <Spinner animation="grow" className="m-2" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" className="m-2" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" className="m-2" variant="warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>Loading awesome dogs...</p>
    </div>
  )
}

export default Loader
