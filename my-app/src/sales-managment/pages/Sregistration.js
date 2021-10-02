import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import TableSales from '../components/TableSales';


const Sregistration = () =>{
    return(
        <div>
            <h2 className="title text-center">
                ADMINISTRADOR DE VENTAS
            </h2>
            
    <Form className="container" md="auto">
    <Row className="justify-content-md-center mb-4">
    <Col xs lg="4" className="justify-content-center">
    <Form.Group className="mb-4 justify-content-center" controlId="formGridAddress1">
    <Form.Label>Fecha:</Form.Label>
    <Form.Control type="date" placeholder="02/10/2021" />
  </Form.Group>
  </Col>
  </Row>
  <Row className="justify-content-center mb-4 text-center">
  <Col  className="justify-content-space-around" md="1">
  <Form.Label>ID Venta:</Form.Label>
  </Col>
  <Col md="2">
  <Form.Group direction="horizontal" className="mb-4" controlId="formGridAddress2">
    
    <Form.Control placeholder="" />
  </Form.Group>
  </Col>
  <Col  md="1">
  <Button className="ml=4" variant="primary" type="submit" >
    Buscar
  </Button >
  </Col>
  </Row>

  
  
    
  <Row className="justify-content-center mb-4">
  <Col  md="1">
  <Form.Label>Estado</Form.Label>
  </Col>
  <Col  md="2" >
  <Form.Group as={Col} controlId="formGridState" className="mb-3">
      
      <Form.Select defaultValue="Elegir...">
        <option>Elegir...</option>
        <option>ACTIVA</option>
        <option>PREPARADA</option>
        <option>DESPACHADA</option>

      </Form.Select>
    </Form.Group>
    </Col>
    <Col  md="2">
    <Button variant="primary" type="submit" >
    Actualizar Estado
  </Button >
    </Col>
   </Row>
    
</Form>
<TableSales/>
<Row className="justify-content-center mb-4"> 
<Col md="1">
<Button variant="primary" type="submit" >
    Actualizar
  </Button >
  </Col>
  <Col md="1">
  <Button variant="primary" type="submit" >
    Cerrar
  </Button >
  </Col>
  </Row>
        </div>
    );
}
export default Sregistration;