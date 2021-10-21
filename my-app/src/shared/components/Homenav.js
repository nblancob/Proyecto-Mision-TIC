import { IconContext } from "react-icons";
import {BsFillHouseFill} from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from 'react-router-dom';
const Homenav=()=>{
    return(
        <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2em"  }}>
         <div>
            <BsFillHouseFill />
            <Navbar.Brand className="Nav-Home" as={Link} to="/home" style={{color: 'white'}}>Home</Navbar.Brand>
         </div>
        </IconContext.Provider>
    );

}
export default Homenav;