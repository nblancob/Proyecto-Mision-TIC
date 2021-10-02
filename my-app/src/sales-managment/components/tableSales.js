import Table from 'react-bootstrap/Table';
import tablep from '/Users/jeova/OneDrive/Documentos/MisionTic/Proyecto_MERN/Proyecto-Mision-TIC/my-app/src/product-managment/components/tablep.css'
import Button from '@restart/ui/esm/Button';

const TableSales =()=> {  
    return(      
            <div className="container mt-1 " md="auto">
            <Table striped bordered hover className="Tablep mt-1" style={{tablep}} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Valor</th>
                        <th>Estado</th>

                    </tr>
                </thead>
                <tbody>
                 
                            <tr >
                                <td>10001</td>
                                <td>30/09/2021</td>
                                <td>$500000</td>
                                <td>PREPARADA</td>

                            </tr>
                            <tr >
                                <td>10002</td>
                                <td>01/10/2021</td>
                                <td>$400000</td>
                                <td>ACTIVA</td>

                            </tr>
               
              
                </tbody>
            </Table>
           
            </div>
        );
    }
export default TableSales;