import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login =() =>{
  return(
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Ingrese su usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button  style={{width: "100%"}} variant="primary" type="submit" href="/user/managment">
          Iniciar
        </Button>
      </Form>
>>>>>>> dc5c976ae2c6fb47b980fa5cf3db8e50637395f8
    );
}

export default Login;