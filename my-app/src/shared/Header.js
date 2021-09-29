import header from './header.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Homenav from './components/Homenav';

const Header =()=>{
    return(
        <div>
            <Navbar className="Header-Nav">
                <Container>
                    <Homenav/>
                        <Nav className="Content-Nav justify-content-end">
                            <Nav.Link href="/user/managment">Usuario</Nav.Link>
                            <Nav.Link href="/sale/managment">Ventas</Nav.Link>
                            <Nav.Link href="/product/managment">Productos</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header