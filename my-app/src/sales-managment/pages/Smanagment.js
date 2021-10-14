import management from './Management.css';
import Tablev from '../components/Table';
import ButtonInsert from '../components/ButtonInsertSale';
import Form from  '../components/Form';
import {Table,Button,Contaiiner,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';

/*test Data for CRUD */
import data from './Test_Data'

const Smanagment = () =>{
    return(
        <div style={{management}}>
            <h4 className="title">
                Administrador de Ventas
            </h4>
            <ButtonInsert/>
            <Tablev/>
        </div>
    );
}
export default Smanagment;