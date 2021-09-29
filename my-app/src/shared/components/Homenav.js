import {BsHouseDoorFill} from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
const Homenav=()=>{
    return(
        <div>
            <BsHouseDoorFill className="me-auto"/>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
        </div>
    );

}
export default Homenav;