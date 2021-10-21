import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Trash from "../../product-managment/components/Trash";
import Pencil from "../../product-managment/components/Pencil";
import management from "../pages/Management.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

/*test Data for CRUD */
import data from "../pages/Test_Data";

class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      form: {
        id: "",
        idProducto: "",
        vendedor: "",
        cliente: "",
        descripcion: "",
        cantidad: "",
        valor: "",
        total: "",
      },
      modalInsertar: false,
    };
  }

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };
  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  render() {
    return (
      <div className="container">
        <div style={{ management }}>
          <Button
            className="boton mb-2"
            onClick={() => this.mostrarModalInsertar()}
          >
            Insertar nueva Venta
          </Button>
        </div>

        <Table class="table">
          <thead>
            <tr>
              <th scope="col">Id Venta</th>
              <th scope="col">Id Producto</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Cliente</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Valor</th>
              <th scope="col">Total</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.idProducto}</td>
                <td>{elemento.vendedor}</td>
                <td>{elemento.cliente}</td>
                <td>{elemento.descripcion}</td>
                <td>{elemento.cantidad}</td>
                <td>{elemento.valor}</td>
                <td>{elemento.total}</td>
                <td style={{ width: "5px" }}>
                  <Pencil />
                </td>
                <td style={{ width: "5px" }}>
                  <Trash />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Venta</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input
                className="form-control"
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label>IdProducto:</label>
              <input className="form-control" name="idProducto" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Vendedor</label>
              <input className="form-control" name="vendedor" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Cliente</label>
              <input className="form-control" name="cliente" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Descripción</label>
              <input className="form-control" name="descripcion" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Cantidad</label>
              <input className="form-control" name="cantidad" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Valor</label>
              <input className="form-control" name="valor" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Total</label>
              <input className="form-control" name="total" type="text" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button color="danger" onClick={() => this.ocultarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default table;

