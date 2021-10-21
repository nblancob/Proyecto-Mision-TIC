import FormSales from "../components/Form";
import Button from "react-bootstrap/Button";
import Tablesales from "../components/tableSales";
import { useState } from "react";
import { Container } from "reactstrap";

const Sregistration = () => {
  const [ventas, setVentas] = useState([]);
  const [date, setDate] = useState("");
  const [ventaID, setVentaID] = useState("");
  const [ventaState, setVentaState] = useState("Elegir...");

  const handleClic = () => {
    if (ventaID !== "") {
      const editVenta = ventas.find(venta => venta._id == ventaID);
      editVenta.Estado = ventaState;
      console.log(editVenta);

      fetch("http://localhost:3000/api/sales/edit/" + ventaID, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(editVenta) // body data type must match "Content-Type" header
      })
      .then((response) => response.json())
      .then(fetch("http://localhost:3000/api/sales/" + ventaID)
      .then((response) => response.json())
      .then((data) => {
        setVentas([data]);
      })
      .catch((e) => console.log(e)))
      .catch((e) => console.log(e));
      
    }
    
  };

  const handleBuscar = () => {
    if (ventaID === "" && date === "") {
      
      fetch("http://localhost:3000/api/sales/1")
        .then((response) => response.json())
        .then((data) => setVentas(data))
        .catch((e) => console.log(e));
        
    } else if (ventaID !== "") {
      fetch("http://localhost:3000/api/sales/" + ventaID)
        .then((response) => response.json())
        .then((data) => {
          setVentas([data]);
        })
        .catch((e) => console.log(e));
    } else {
      fetch("http://localhost:3000/api/sales/fecha/" + date)
        .then((response) => response.json())
        .then((data) => {
          setVentas(data);
        })
        .catch((e) => console.log(e));
    }
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleVentaID = (event) => {
    setVentaID(event.target.value);
  };
  const handleVentaState = (event) => {
    setVentaState(event.target.value);
  };
  const handleFecha = () => {
    fetch("http://localhost:3000/api/sales/fecha/" + date)
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <h2 className="title text-center mt-1">ADMINISTRADOR DE VENTAS</h2>
      <FormSales
        date={date}
        handleDate={handleDate}
        ventaID={ventaID}
        handleVentaID={handleVentaID}
        handleBuscar={handleBuscar}
        handleFecha={handleFecha}
        handleVentaState={handleVentaState}
        className="mt-1"
        ventaState={ventaState}
      />
      <Button
        className="btn mt-4 mb-3 "
        variant="success"
        type="button"
        onClick={handleBuscar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        Buscar
      </Button>
      <Tablesales ventas={ventas} />

      <Button variant="secondary" type="button" onClick={handleClic}>
        Actualizar
      </Button>

      <Button variant="secondary" type="button" className="ms-4">
        Cerrar
      </Button>
    </Container>
  );
};
export default Sregistration;
