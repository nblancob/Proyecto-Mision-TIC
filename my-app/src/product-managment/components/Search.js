import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import tablep from "./tablep.css";
import Tablep from "./Tablep";
import api from "../../Api";
import { useEffect } from "react";
import { useState } from "react";

const Search = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState(" ");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };
    featchData();
  }, []);

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };
  const proof = (event) => {
    if (event.key === "Enter") {
      filter();
    }
  };
  const filter = () => {
    setLista(productos);
    if (busqueda.length === 0) {
      setProductos(lista);
    } else {
      const search = productos.filter((p) => p.description.includes(busqueda));
      setProductos(search);
    }
  };
  return (
    <div className="container">
      <InputGroup
        className="Input-search mb-3 justify-content-center container"
        style={{ tablep }}
        onChange={handleChange}
        onKeyPress={proof}
      >
        <FormControl
          placeholder="ID o descripción del producto"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className="Info-btn" id="button-addon2" onClick={filter}>
          Buscar
        </Button>
      </InputGroup>
      <Tablep productos={productos} setProductos={setProductos} />
    </div>
  );
};

export default Search;
