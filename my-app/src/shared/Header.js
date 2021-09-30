import header from './header.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Homenav from './components/Homenav';

const Header =()=>{
    return(
        <div style={{header}}>
            <Navbar className="Header-Nav font-link" >
                <Container>
                    <Homenav/>
                        <Nav className="Content-Nav justify-content-end" >
                            <Nav.Link href="/user/managment" style={{color: 'white'}}>Usuario</Nav.Link>
                            <Nav.Link href="/sale/managment" style={{color: 'white'}}>Ventas</Nav.Link>
                            <Nav.Link href="/product/managment" style={{color: 'white'}}>Productos</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header