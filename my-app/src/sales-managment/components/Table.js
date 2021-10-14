import Table from 'react-bootstrap/Table';
import Trash from '../../product-managment/components/Trash';
import Pencil from '../../product-managment/components/Pencil';
const Tablev = (state)=> {
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
                            <tr>
                                <th scope="row">1</th>
                                <td>001</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{width:"5px"}}><Pencil/></td>
                                <td style={{width:"5px"}}><Trash/></td>


                                
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>002</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td style={{width:"5px"}}><Pencil/></td>
                                <td style={{width:"5px"}}><Trash/></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>003</td>
                                <td>Michael</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td style={{width:"5px"}}><Pencil/></td>
                                <td style={{width:"5px"}}><Trash/></td>
                            </tr>
                             
                        </tbody>
            </Table>
        </div>
            
    );

}

export default Tablev;