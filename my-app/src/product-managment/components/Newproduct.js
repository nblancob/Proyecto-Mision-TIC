import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";

const Newproduct = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="ID del producto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Control type="text" placeholder="Descripción del producto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <Form.Control
            type="number"
            placeholder="Valor unitario del producto"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Select aria-label="Default select example">
          <option value="1">Disponible</option>
          <option value="2">No disponible</option>
        </Form.Select>
      </Form.Group>
      <Button
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        CREAR
      </Button>
    </Form>
  );
};

export default Newproduct;
