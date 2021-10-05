import Login from "./components/Login";
import Card from 'react-bootstrap/Card'
import home from './Home.css'
import Imglogin from "./img/Imglogin.jpg";

const Home = () =>{

    return(
        <div className="container" style={{home}}>
            <div className="abs-center">
            <Card className="card" >
                <Card.Title className="text-center">BIENVENIDO</Card.Title>
                <Card.Img variant="top" src={Imglogin} className="image align-self-center"/> 
                {/* <a href='https://www.freepik.es/fotos/madera'>Foto de Madera creado por jcomp - www.freepik.es</a> */}
                <Card.Body>
                    <Card.Text>
                        <Login/> 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};
export default Home;