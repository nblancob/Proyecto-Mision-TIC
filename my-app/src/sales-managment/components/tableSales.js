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
<<<<<<< HEAD
                 
                            <tr >
                                <td>10001</td>
                                <td>30/09/2021</td>
                                <td>$500000</td>
                                <td>EN PROCESO</td>

                            </tr>
                            <tr >
                                <td>10002</td>
                                <td>01/10/2021</td>
                                <td>$400000</td>
                                <td>ENTREGADA</td>
=======
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
>>>>>>> dc5c976ae2c6fb47b980fa5cf3db8e50637395f8

                    </tr>
               
              
                </tbody>
            </Table>
           
            </div>
        );
    }
export default TableSales;