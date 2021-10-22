import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const UserPage = () => {
  return (
    <div className="container" md="1">
      <Form md="4">
        <Row className="mb-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-white">Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-white">Rol</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Elegir...</option>
              <option>Usuario</option>
              <option>Vendedor</option>
              <option>Administrador</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-white">ID Vendedor</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-white">Estado</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Elegir...</option>
              <option>Aprobado</option>
              <option>Pendiente</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-1" controlId="formGridAddress1">
          <Form.Label className="text-white">Nombre</Form.Label>
          <Form.Control placeholder="Nombre de usuario" />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-2 me-0 float-end">
          Nuevo
        </Button>

        <Button variant="primary" type="submit" className="m-2 float-end">
          Actualizar
        </Button>

        <Button variant="primary" type="submit" className="m-2  float-end mr-0">
          Buscar
        </Button>
      </Form>
    </div>
  );
};

export default UserPage;
