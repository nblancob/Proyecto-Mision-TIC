import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import tablep from "./tablep.css";
import React, { Component } from "react";
import Tablep from "./Tablep";
import ListaProductos from "./data";
import api from "../../Api";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      newTable: [],
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  componentDidMount() {
    const featchData = async () => {
      const response = await api.products.list();
      this.setState({newTable:response});
    };
    featchData();
  }

  proof = (event) => {
    if (event.key === "Enter") {
      this.filter();
    }
  };
  filter = () => {
    const search = ListaProductos.filter(
      (p) =>
        p.id.includes(this.state.value) ||
        p.description.includes(this.state.value)
    );
    this.setState({ newTable: search });
  };
  render() {
    return (
      <div className="container">
        <InputGroup
          className="Input-search mb-3 justify-content-center container"
          style={{ tablep }}
          onChange={this.handleChange}
          onKeyPress={this.proof}
        >
          <FormControl
            placeholder="ID o descripción del producto"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button className="Info-btn" id="button-addon2" onClick={this.filter}>
            Buscar
          </Button>
        </InputGroup>
        <Tablep variable={this.state} />
      </div>
    );
  }
}

export default Search;
