import Form from "react-bootstrap/Form";
import "./Form.css";

const FormSales = ({ date, handleDate, ventaID, handleVentaID,editProduct, ventaState, handleVentaState }) => {

  return (
    <Form onReset={editProduct} className="container font-link">
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Fecha:</Form.Label>
        <Form.Control
          type="date"
          placeholder="02/10/2021"
          value={date}
          onChange={handleDate}
        />
      </Form.Group>
      <Form.Label>ID Venta:</Form.Label>
      <Form.Group
        direction="horizontal"
        className="mb-4"
        controlId="formGridAddress2"
      >
        <Form.Control
          placeholder=" "
          value={ventaID}
          onChange={handleVentaID}
        />
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Estado:</Form.Label>
        <Form.Select defaultValue={ventaState} onChange={handleVentaState}> 
          <option>Elegir...</option>
          <option>ACTIVA</option>
          <option>PREPARADA</option>
          <option>DESPACHADA</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};
export default FormSales;
