import { IconContext } from "react-icons";
import Header  from "../header";
import {BsFillHouseFill} from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
const Homenav=()=>{
    return(
        <IconContext.Provider value={{ color: "#723c70", className: "global-class-name", size: "2em"  }}>
         <div>
            <BsFillHouseFill />
            <Navbar.Brand className="Nav-Home" href="/home">Home</Navbar.Brand>
         </div>
        </IconContext.Provider>
    );

}
export default Homenav;