import management from './Management.css';
import Tablev from '../components/Table';

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