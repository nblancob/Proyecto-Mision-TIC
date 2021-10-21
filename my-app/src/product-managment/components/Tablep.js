import Table from "react-bootstrap/Table";
import tablep from "./tablep.css";
import Button from "react-bootstrap/Button";
import api from "../../Api";
import Modal from "react-bootstrap/Modal";
import { Alert } from "reactstrap";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { Link, useHistory } from "react-router-dom";

const Tablep = ({ productos , setProductos}) => {
  const history = useHistory();
  const [error, setError] = useState();
  const [productID, setproductID] = useState("");
  const [success, setSuccess] = useState();
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [newProduct, setNewProduct] = useState({
    _id: " ",
    id_producto: 0,
    description: "Descripción del producto",
    price: 0,
    state: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.getProduct(productID);
      setNewProduct(response);
    };

    fetchData();
  }, [productID]);

  const handleClick = async (event) => {
    setproductID(event.target.id);
    setmodalInsertar(true);
  };

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const editProduct = async () => {
    const apiResponse = await api.products.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
    } else {
      setSuccess(apiResponse);
    }
    setNewProduct({
      _id: " ",
      id_producto: 0,
      description: "Descripción del producto",
      price: 0,
      state: false,
    });
  };

  const deleteProduct = (event) => {
    setproductID(event.target.id);
    api.products.delete(event.target.id);
    const newState = productos.filter(
      (productos) => productos._id !== event.target.id
    );
      setProductos(newState)
  };

  return (
    <div className="container">
      <Table striped bordered hover className="Tablep" style={{ tablep }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Valor</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((data, key) => {
            let state;
            if (data.state === true) {
              state = "Disponible";
            } else {
              state = "No disponible";
            }
            return (
              <tr key={key}>
                <td>{data.id_producto}</td>
                <td>{data.description}</td>
                <td>${data.price}</td>
                <td>{state}</td>
                <td style={{ width: "5px" }}>
                  <Button
                    id={data._id}
                    className="Pencil-btn"
                    style={{ tablep }}
                    onClick={handleClick}
                  >
                    <svg
                      id={data._id}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path
                        id={data._id}
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                      />
                    </svg>
                  </Button>
                </td>
                <td style={{ width: "5px" }}>
                  <Button
                    id={data._id}
                    className="Trash-btn"
                    style={{ tablep }}
                    onClick={deleteProduct}
                  >
                    <svg
                      id={data._id}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        id={data._id}
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        id={data._id}
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/product/registration">
      <Button
        className="btn-add font-family"
        variant="outline-success"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 20 20"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Agregar producto
      </Button>
      </Link>
      <Modal show={modalInsertar}>
        <Modal.Header className="Modal-Header font-link">
          <Modal.Title>EDITAR PRODUCTO</Modal.Title>
        </Modal.Header>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success} </Alert>}
        <Modal.Body>
          <ProductForm
            formValue={newProduct}
            handleChange={handleChange}
            edit={editProduct}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={newProduct._id} onClick={editProduct}>
            Editar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              history.go(0);
              setmodalInsertar(false);
            }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Tablep;
