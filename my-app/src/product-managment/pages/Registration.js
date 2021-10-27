import Card from "react-bootstrap/Card";
import managment from "./Managment.css";
import Newproduct from "../components/ProductForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import api from "../../Api";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Registration = () => {
  const [variant, setVariant] = useState(" ");
  const [success, setSuccess] = useState();
  const [newProduct, setNewProduct] = useState({
    _id: " ",
    id_producto: 0,
    description: "Descripción del producto",
    price: 0,
    state: false,
  });

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    if (event.target.value === "true") {
      setNewProduct({ ...newProduct, state: true });
    } else if (event.target.value === "false") {
      setNewProduct({ ...newProduct, state: false });
    }
  };

  const addProduct = async (event) => {
    const apiResponse = await api.products.create(newProduct);
    setSuccess(apiResponse);
    if (apiResponse === "creado satisfactoriamente") {
      setVariant("success");
    } else {
      setVariant("danger");
    }
  };

  return (
    <div className="container" style={{ managment }}>
      <div className="abs-center">
        <Card className="card">
          <Card.Title className="text-center">CREAR PRODUCTO</Card.Title>
          {success && (
            <Alert variant={variant}>
              {success}{" "}
              <Button
                className="btn-ver"
                variant="info"
                as={Link}
                to="/product/managment"
              >
                Ver Productos
              </Button>
            </Alert>
          )}
          {/* <a href='https://www.freepik.es/fotos/madera'>Foto de Madera creado por jcomp - www.freepik.es</a> */}
          <Card.Body>
            <Card.Text>
              <Newproduct formValue={newProduct} handleChange={handleChange} />
            </Card.Text>
          </Card.Body>
          <Button
            className="btn-create"
            variant="outline-dark"
            onClick={addProduct}
          >
            Agregar producto
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default Registration;
