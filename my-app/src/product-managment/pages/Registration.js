import Card from 'react-bootstrap/Card'
import managment from './Managment.css';
import Newproduct from '../components/ProductForm';
import { useState } from 'react';

const Registration = () =>{
    const [newProduct, setNewProduct] = useState({
        _id: " ",
        id_producto: 0,
        description: "Descripción del producto",
        price: 0,
        state: false,
      });
    
    return(
        <div className="container" style={{managment}}>
        <div className="abs-center">
        <Card className="card" >
            <Card.Title className="text-center">CREAR PRODUCTO</Card.Title>
            <Card.Img variant="top" src={''} className="image align-self-center"/> 
            {/* <a href='https://www.freepik.es/fotos/madera'>Foto de Madera creado por jcomp - www.freepik.es</a> */}
            <Card.Body>
                <Card.Text>
                    <Newproduct formValue={newProduct}/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    </div>
    );
}
export default Registration;