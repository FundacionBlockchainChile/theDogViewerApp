import './App.css'
import { Container, Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <Container>
          <Form className="m-4">
            <Form.Group className="" controlId="formBasicEmail">
              <Row>
                <Col md>
                  <Form.Label>Raza</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Elige tu raza de mascota favorita!
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          <Slider />
        </Container>
      </header>
    </div>
  )
}

export default App
