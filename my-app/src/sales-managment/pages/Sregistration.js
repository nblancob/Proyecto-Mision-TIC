import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Tablesales from "../components/tableSales";
import { useState } from "react";

const Sregistration = () => {

  const [ventas, setVentas] = useState([]);
  const [date, setDate] = useState("");
  const [ventaID, setVentaID] = useState("");


  const handleClic =  ()=>{
    console.log("hola");
     fetch('http://localhost:3000/api/sales/1')
      .then(response => response.json())
      .then(data => setVentas(data))
      .catch(e => console.log(e))

}

const handleBuscar =  ()=>{
  if (ventaID === "" && date === "") {
    console.log("hola");
    fetch('http://localhost:3000/api/sales/1')
     .then(response => response.json())
     .then(data => setVentas(data))
     .catch(e => console.log(e))
  }else if (ventaID !== ""){
    console.log("hola console");
    fetch('http://localhost:3000/api/sales/' + ventaID)
     .then(response => response.json())
     .then(data => {
       setVentas([data])
     })
     .catch(e => console.log(e))
  }else {
    console.log("hola console");
    fetch('http://localhost:3000/api/sales/fecha/' + date)
     .then(response => response.json())
     .then(data => {
       console.log(data)
       setVentas(data)
     })
     .catch(e => console.log(e))

  }
  
}

const handleDate = (event) =>{
  setDate(event.target.value)  
}

const handleVentaID = (event) =>{
  setVentaID(event.target.value)  
}
const handleFecha =  ()=>{
  console.log("hola console");
   fetch('http://localhost:3000/api/sales/fecha/' + date)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setVentas(data)
    })
    .catch(e => console.log(e))
}

  return (
    <div>
      <h2 className="title text-center">ADMINISTRADOR DE VENTAS</h2>
      
      <Form className="container" md="auto">
        <Row className="justify-content-md-center mb-4">
          <Col xs lg="4" className="justify-content-center">
            <Form.Group
              className="mb-4 justify-content-center"
              controlId="formGridAddress1"
            >
              <Form.Label className="title">Fecha:</Form.Label>
              <Form.Control type="date" placeholder="02/10/2021" value={date} onChange={handleDate}/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4 text-center">
          <Col className="justify-content-space-around" md="1">
            <Form.Label className="title">ID Venta:</Form.Label>
          </Col>
          <Col md="2">
            <Form.Group
              direction="horizontal"
              className="mb-4"
              controlId="formGridAddress2"
            >
              <Form.Control placeholder="" value={ventaID} onChange={handleVentaID} />
            </Form.Group>
          </Col>
          <Col md="1">
            <Button className="ml=4" variant="primary" type="button" onClick={handleBuscar}>
              Buscar
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md="1">
            <Form.Label className="title">Estado</Form.Label>
          </Col>
          <Col md="2">
            <Form.Group as={Col} controlId="formGridState" className="mb-3">
              <Form.Select defaultValue="Elegir...">
                <option>Elegir...</option>
                <option>ACTIVA</option>
                <option>PREPARADA</option>
                <option>DESPACHADA</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="2">
            <Button variant="primary" type="button" onClick={handleFecha}>
              Actualizar Estado
            </Button>
          </Col>
        </Row>
      </Form>
      <Tablesales ventas={ventas}/>
      <Row className="justify-content-center mb-4">
        <Col xs="1">
          <Button variant="primary" type="button" className="ms-4" onClick={handleClic}>
            Actualizar
          </Button>
        </Col>
        <Col xs="1">
          <Button variant="primary" type="submit" className="ms-4">
            Cerrar
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Sregistration;
