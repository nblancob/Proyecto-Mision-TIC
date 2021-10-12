import Table from "react-bootstrap/Table";
import tablep from "./tablep.css";
import Trash from "./Trash";
import Pencil from "./Pencil";

const Tablep = (state) => {
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
                  <Trash />
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
