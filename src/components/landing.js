import React from 'react'
import { Button } from 'react-bootstrap'

export const Landing = ({ setLanding }) => {
  return (
    <div className="App">
      <div className="smileWelcome">
        <h2 className="white">Welcome to...</h2>
        <h1 className="red">The Dog Founder</h1>
        <Button onClick={() => setLanding(false)} variant="success">
          Show me the Dogs!!!
        </Button>
      </div>
    </div>
  )
}
