import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Trash from '../../product-managment/components/Trash';
import Pencil from '../../product-managment/components/Pencil';
import management from '../pages/Management.css'
import {Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,Form} from 'reactstrap';
import api from '../../Api';

const url = 'http://localhost:4000/api/salesManagment';

class table extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            form:{
                id_product:'',
                seller:'',
                customer:'',
                description:'',
                amount:'',
                price:'',
                total:''
            },
            modalInsertar: false,
        };
      };
    
    listSale=()=>{
        fetch(url)
            .then(response => response.json())
            .then(dataJson => this.setState({data:dataJson})) 
    }
    componentDidMount() {
        this.listSale();
    };
    
    handleChange= async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form)
    }
    
    addSale(e){
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));

        console.log('Agregando Tarea');
        this.listSale();
        this.ocultarModalInsertar();
    }
    
    mostrarModalInsertar=()=>{
        this.setState({modalInsertar:true});
    }  
    ocultarModalInsertar=()=>{
        this.setState({modalInsertar:false});
    }  

    render(){
        return(
            <div className="container">  
            <div style={{management}}>
                <Button className="boton mb-2" onClick={() => this.mostrarModalInsertar()}>Insertar nueva Venta</Button>
            </div>

            <Table class="table">
                <thead>
                    <tr>
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
                    {this.state.data.map((elemento)=>(
                        <tr>
                            <td>{elemento.id_product}</td>
                            <td>{elemento.seller}</td>
                            <td>{elemento.customer}</td>
                            <td>{elemento.description}</td>
                            <td>{elemento.amount}</td>
                            <td>{elemento.price}</td>
                            <td>{elemento.total}</td>
                            <td style={{width:"5px"}}><Pencil/></td>
                            <td style={{width:"5px"}}><Trash/></td>  
                        </tr>
                    ))}              
                </tbody>
            </Table>
            
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Insertar Venta</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.addSale}>
                        <FormGroup>
                            <label>IdProducto:</label>
                            <input className="form-control" name="id_product" type="text" onChange={this.handleChange}/>
                        </FormGroup> 
                        <FormGroup>
                            <label>Vendedores</label>
                            <select id="inputState" class="form-control" name="seller" onChange={this.handleChange}>
                                <option selected>Seleccione un Vendedor</option>
                                <option >Juan Sebation Rondon</option>
                                <option >Jose Meneces</option>
                                <option >Ricardo Cubides</option>
                            </select>
                        </FormGroup> 
                        <FormGroup>
                            <label>Cliente</label>
                            <select id="inputState" class="form-control" name="customer" onChange={this.handleChange}>
                                <option selected>Seleccione un Cliente</option>
                                <option>Fernando Solano</option>
                                <option>Juan Danilo</option>
                                <option>David Villamil</option>
                            </select>
                        </FormGroup> 
                        <FormGroup>
                            <label>Descripción</label>
                            <input className="form-control" name="description" type="text" onChange={this.handleChange} />
                        </FormGroup> 
                        <FormGroup>
                            <label>Cantidad</label>
                            <input className="form-control" name="amount" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Valor</label>
                            <input className="form-control" name="price" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Total</label>
                            <input className="form-control" name="total" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                        <Button onClick={() => this.addSale(this.state)} color="primary">Insertar</Button>
                        <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>        
            </Modal>
            
        </div>
        );
    }
        
}

export default table;