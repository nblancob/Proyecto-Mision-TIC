import header from './header.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Homenav from './components/Homenav';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const Header =({nombre, profilePic})=>{
    return(
        <div style={{header}}>
            <Navbar className="Header-Nav font-link h-25" >
                <Container>
                    <Homenav/>
                        <Nav className="Content-Nav justify-content-end align-items-center " >
                            <Nav.Link as={Link} to="/user/managment" style={{color: 'white'}}>Usuario</Nav.Link>
                            <Nav.Link as={Link} to="/sale/registration" style={{color: 'white'}}>Ventas</Nav.Link>
                            <Nav.Link as={Link} to="/product/managment" style={{color: 'white'}}>Productos</Nav.Link>
                        </Nav>
                </Container>
                <h8 className="text-center me-2">{nombre}</h8>                       
                <Link to="/">
                <Image src={profilePic} className="me-4" width="40" height="40" roundedCircle/>
                </Link>
            </Navbar>
        </div>
    );
}
export default Header
