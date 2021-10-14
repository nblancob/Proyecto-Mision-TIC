import management from '../pages/Management.css'

import {Table,Button,Contaiiner,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';

const ButtonInsert = () => {
    return(
        <div style={{management}} className="container">
            <Button className="boton mb-2">Insertar nueva Venta</Button>
        </div>
    );
}

export default ButtonInsert;