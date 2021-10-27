import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import api from "../../../Api";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import UserForm from "./UserForm";

const UserTable = ({ users, setUsers }) => {
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [variant, setVariant] = useState(" ");
  const [id, setID] = useState(" ");
  const [success, setSuccess] = useState();
  const [newUser, setNewuser] = useState({
    _id: " ",
    Id_User: 0,
    Nombre: " ",
    Correo: " ",
    Rol: " ",
    Estado: false,
  });

  const handleChange = (event) => {
    setNewuser({ ...newUser, [event.target.name]: event.target.value });
    if (event.target.value === "true") {
      setNewuser({ ...newUser, Estado: true });
    } else if (event.target.value === "false") {
      setNewuser({ ...newUser, Estado: false });
    }
  };

  const deleteUser = (event) => {
    api.user.delete(event.target.id);
    const newState = users.filter((user) => user._id !== event.target.id);
    setUsers(newState);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.user.getUserId(id);
      setNewuser(response);
    };

    fetchData();
  }, [id]);

  const editar = () => {
    const index = users.findIndex((user) => user._id === id);
    users[index] = newUser;
  };
  const editProduct = async () => {
    const apiResponse = await api.user.edit(newUser);
    setSuccess(apiResponse);
    if (apiResponse === "El producto se actualizó satisfactoriamente") {
      setVariant("success");
    } else {
      setVariant("danger");
    }
  };

  useEffect(() => {
    const featchData = async () => {
      const response = await api.user.list();
      setUsers(response);
    };
    featchData();
  }, [setUsers]);

  const handleClick = (event) => {
    setID(event.target.id);
    setmodalInsertar(true);
  };

  return (
    <div className="container mt-4 " md="auto">
      <Table striped bordered hover className="Tablep mt-3">
        <thead>
          <tr>
            <th>ID Vendedor</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, key) => {
            let state;
            if (data.Estado === true) {
              state = "Activo";
            } else {
              state = "Inactivo";
            }
            return (
              <tr key={key}>
                <td>{data.Id_User}</td>
                <td>{data.Nombre}</td>
                <td>{data.Correo}</td>
                <td>{data.Rol}</td>
                <td>{state}</td>
                <td style={{ width: "5px" }}>
                  <Button
                    id={data._id}
                    className="Pencil-btn"
                    onClick={handleClick}
                  >
                    <svg
                      id={data._id}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      fill="white"
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
                    onClick={deleteUser}
                  >
                    <svg
                      id={data._id}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      fill="white"
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
      <Modal show={modalInsertar}>
        <Modal.Header className="Modal-Header font-link">
          <Modal.Title>EDITAR PRODUCTO</Modal.Title>
        </Modal.Header>
        {success && <Alert variant={variant}>{success}</Alert>}
        <Modal.Body>
          <UserForm
            formValue={newUser}
            setFormvalue={setNewuser}
            handleChange={handleChange}
            edit={editProduct}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={newUser._id} onClick={editProduct}>
            Editar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              editar();
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
export default UserTable;
