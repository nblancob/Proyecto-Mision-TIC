import Table from 'react-bootstrap/Table';


const TableSales =()=> {  
    return(      
            <div className="container mt-1 " md="auto">
            <Table striped bordered hover className="Tablep mt-1" >
                <thead>
                    <tr>
                        <th>ID Venta</th>
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