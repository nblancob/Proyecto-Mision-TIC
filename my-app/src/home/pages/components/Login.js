import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/esm/Col";

const Login =() =>{
    return(
        <div className="container justify-content-space-around">
          <Form >
              <Col md="4" className="justify-content-center container">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="title">Usuario</Form.Label>
    <Form.Control type="text" placeholder="Ingrese su usuario" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="title">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" href="/user/managment" className="float-end">
    Iniciar
  </Button>
  </Col>
</Form>
            
        </div>
    );
}

export default Login;