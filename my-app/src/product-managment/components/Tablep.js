import Table from "react-bootstrap/Table";
import tablep from "./tablep.css";
import Button from "react-bootstrap/Button";
import api from "../../Api";
import Modal from "react-bootstrap/Modal";
// import FormGroup from "react-bootstrap/FormGroup";
import { useState } from "react";
import ProductForm from "./ProductForm";

const Tablep = ({state, setState}) => {
  const [error, setError] = useState();
  const [productID, setproductID] = useState();
  const [success, setSuccess] = useState();
  const [newProduct, setNewProduct] = useState({
    _id: " ",
    id_producto: 0,
    description: "Hola mundo",
    price: 0,
    state: false,
  });

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    console.log(newProduct);
  };

  const editProduct = async () => {
    const apiResponse = await api.products.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
    }
  };

  const deleteProduct = (event) => {
    setproductID(event.target.id);
    api.products.delete(productID);
  };
  const handleClick = async (event) => {
    const id = event.target.id;
    setmodalInsertar(true);
    const response = await api.products.getProduct(id);
    setNewProduct(response);
  };

  const [modalInsertar, setmodalInsertar] = useState(false);

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
          {state.newTable.map((data, key) => {
            if (data._id !== productID) {
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
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
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
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            } else {
              return " ";
            }
          })}
        </tbody>
      </Table>
      <Modal show={modalInsertar}>
        <Modal.Header className="Modal-Header font-link">
          <Modal.Title>EDITAR PRODUCTO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm formValue={newProduct} handleChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={newProduct._id} onClick={editProduct}>
            Editar
          </Button>
          <Button variant="danger" onClick={() => setmodalInsertar(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Tablep;
