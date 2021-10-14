import Table from 'react-bootstrap/Table';
import Trash from '../../product-managment/components/Trash';
import Pencil from '../../product-managment/components/Pencil';
import {Button,Contaiiner,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';

/*test Data for CRUD */
import data from '../pages/Test_Data'

const Tablev = (state,handleChange) => {
    state = {
        data:data,
        form:{
            id:'',
            idProducto:'',
            vendedor:'',
            cliente:'',
            descripcion:'',
            cantidad:'',
            valor:'',
            total:''
        },
        modalInsertar:false
    };

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    return(
        <div className="container">
            <Table class="table table">
                <thead>
                    <tr>
                        <th scope="col">Id Venta</th>
                        <th scope="col">Id Producto</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Total</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {state.data.map((elemento)=>(
                        <tr>
                            <td scope="row">{elemento.id}</td>
                            <td>{elemento.idProducto}</td>
                            <td>{elemento.vendedor}</td>
                            <td>{elemento.cliente}</td>
                            <td>{elemento.descripcion}</td>
                            <td>{elemento.cantidad}</td>
                            <td>{elemento.valor}</td>
                            <td>{elemento.total}</td>
                            <td style={{width:"5px"}}><Pencil/></td>
                            <td style={{width:"5px"}}><Trash/></td>  
                        </tr>
                    ))}              
                </tbody>
            </Table>
            
            <Modal>
                <ModalHeader>
                    <div>
                        <h3>Insertar Venta</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id</label>
                        <input className="form-control" type="text" value={state.data.length+1} />
                    </FormGroup> 
                    <FormGroup>
                        <label>IdProducto:</label>
                        <input className="form-control" name="idProducto" type="text" onChange={handleChange} />
                    </FormGroup> 
                    <FormGroup>
                        <label>Vendedor</label>
                        <input className="form-control" name="vendedor" type="text" onChange={handleChange} />
                    </FormGroup> 
                    <FormGroup>
                        <label>Cliente</label>
                        <input className="form-control" name="cliente" type="text" onChange={handleChange} />
                    </FormGroup> 
                    <FormGroup>
                        <label>Descripción</label>
                        <input className="form-control" name="descripcion" type="text" onChange={handleChange} />
                    </FormGroup> 
                    <FormGroup>
                        <label>Cantidad</label>
                        <input className="form-control" name="cantidad" type="text" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Valor</label>
                        <input className="form-control" name="valor" type="text" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Total</label>
                        <input className="form-control" name="total" type="text" onChange={handleChange} />
                    </FormGroup>
                </ModalBody>        
            </Modal>
            
        </div>
            
    );

}

export default Tablev;