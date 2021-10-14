import management from './Management.css';
import Tablev from '../components/Table';
import Form from  '../components/Form';


const Smanagment = () =>{
    return(
        <div style={{management}}>
            <h4 className="title">
                Administrador de Ventas
            </h4>
            <Tablev/>
        </div>
    );
}
export default Smanagment;