import Table from "react-bootstrap/Table";
import tablep from "./tablep.css";
import Pencil from "./Pencil";
import Button from "react-bootstrap/Button";
import api from "../../Api";

const Tablep = (state) => {
  const deleteProduct = (event) => {
    const productID = event.target.id;
    api.products.delete(productID);
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
          {state.variable.newTable.map((data, key) => {
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
                  <Pencil />
                </td>
                <td style={{ width: "5px" }}>
                  <Button
                    id={data._id}
                    className="Trash-btn"
                    style={{ tablep }}
                    onClick={deleteProduct}
                    href="/product/managment"
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
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Tablep;
