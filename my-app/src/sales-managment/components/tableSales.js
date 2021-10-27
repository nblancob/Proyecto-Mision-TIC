import Table from "react-bootstrap/Table";

const TableSales = ({ ventas }) => {
  console.log("Ventas", ventas);
  return (
    <div className="container mt-1 " md="auto">
      <Table striped bordered hover className="Tablep mt-1">
        <thead>
          <tr>
            <th>ID Venta</th>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => {
            var fechaNueva = new Date(venta.Fecha);
            return (
              <tr key={venta._id}>
                <td>{venta._id}</td>
                <td>{fechaNueva.toLocaleString()}</td>
                <td>${venta.Valor}</td>
                <td>{venta.Estado}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default TableSales;
