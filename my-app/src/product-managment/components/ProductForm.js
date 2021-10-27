import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";

const Newproduct = ({ formValue, handleChange }) => {
  const handleValue = (formValue) => {
    if (formValue.state === true) {
      return "true";
    } else {
      return "false";
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <label>ID Producto:</label>
        <Form.Control
          name="id_producto"
          type="number"
          placeholder="ID del producto"
          onChange={handleChange}
          value={formValue.id_producto}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <label>Descripción:</label>
        <Form.Control
          name="description"
          type="text"
          placeholder="Descripción del producto"
          onChange={handleChange}
          value={formValue.description}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <label>Precio:</label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <Form.Control
            name="price"
            type="number"
            placeholder="Valor unitario del producto"
            onChange={handleChange}
            value={formValue.price}
          />
        </InputGroup>
      </Form.Group>
      <label>Estado:</label>
      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Select
          name="state"
          aria-label="Default select example"
          onChange={handleChange}
          value={handleValue(formValue)}
        >
          <option value="true">Disponible</option>
          <option value="false">No disponible</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Newproduct;
