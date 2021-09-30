import Table from 'react-bootstrap/Table';
import tablep from './tablep.css';
import { ListaProductos } from './data';

const Tablep=()=>{
    return(
        <Table striped bordered hover className="Tablep" style={{tablep}}>
            <thead>
                <tr>
                    {console.log(ListaProductos)}
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Valor</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {ListaProductos.map((data,key)=>{
                    return(
                        <tr key={key}>
                            <td>{data.id}</td>
                            <td>{data.description}</td>
                            <td>${data.price}</td>
                            <td>{data.state}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
export default Tablep;