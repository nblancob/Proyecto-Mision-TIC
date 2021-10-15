import Card from 'react-bootstrap/Card'
import managment from './Managment.css';
import Newproduct from '../components/ProductForm';

const Registration = () =>{
    return(
        <div className="container" style={{managment}}>
        <div className="abs-center">
        <Card className="card" >
            <Card.Title className="text-center">CREAR PRODUCTO</Card.Title>
            <Card.Img variant="top" src={''} className="image align-self-center"/> 
            {/* <a href='https://www.freepik.es/fotos/madera'>Foto de Madera creado por jcomp - www.freepik.es</a> */}
            <Card.Body>
                <Card.Text>
                    <Newproduct/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    </div>
    );
}
export default Registration;