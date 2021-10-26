import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserPage = ({ users, setUsers }) => {
  const [filtro, setFiltro] = useState(" ");
  const [lists, setLists] = useState([]);

  const proof = (event) => {
    if (event.key === "Enter") {
      filter();
    }
  };
  const handleChange = (event) => {
    setFiltro(event.target.value);
  };
  const filter = () => {
    setLists(users);
    if (filtro.length === 0) {
      setUsers(lists);
    } else {
      const search = users.filter((p) => p.Nombre.includes(filtro));
      setUsers(search);
    }
  };

  return (
    <div className="container" md="1">
      <Form md="4">
        <Form.Group className="mb-1" controlId="formGridAddress1">
          <Form.Label className="text-white">Nombre</Form.Label>
          <Form.Control
            placeholder="Nombre de usuario"
            onChange={handleChange}
            onKeyPress={proof}
          />
        </Form.Group>

        <Button
          variant="primary mb-5"
          className="m-2  float-end mr-0"
          onClick={filter}
        >
          Buscar
        </Button>
      </Form>

      
    </div>
  );
};

export default UserPage;
