import managment from './Managment.css';
import Search from '../components/Search';
const Managment =()=>{

    
    return(
        <div style={{managment}}>
            <h2 className="title text-center mt-5 mb-2">
                ADMINISTRADOR DE PRODUCTOS
            </h2>
            <Search/>
        </div>
    );
}
export default Managment;