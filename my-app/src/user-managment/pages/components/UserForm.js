import Form from "react-bootstrap/Form";

const Newuser = ({ formValue, handleChange }) => {
  const handleValue = (formValue) => {
    if (formValue.Estado === true) {
      return "true";
    } else {
      return "false";
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <label>ID Usuario:</label>
        <Form.Control
          name="Id_User"
          type="number"
          placeholder="ID del usuario"
          value={formValue.Id_User}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <label>Nombre:</label>
        <Form.Control
          name="Nombre"
          type="text"
          placeholder="Nombre del usuario"
          value={formValue.Nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <label>Correo:</label>
        <Form.Control
          name="Correo"
          type="text"
          placeholder="Correo del usuario"
          value={formValue.Correo}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicState">
        <label>Estado:</label>
        <Form.Select
          name="Estado"
          aria-label="Default select example"
          onChange={handleChange}
          value={handleValue(formValue)}
        >
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicState">
        <label>Rol:</label>
        <Form.Select
          name="Rol"
          aria-label="Default select example"
          onChange={handleChange}
          value={formValue.Rol}
        >
          <option value="null">null</option>
          <option value="Administrador">Administrador</option>
          <option value="Vendedor">Vendedor</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Newuser;
