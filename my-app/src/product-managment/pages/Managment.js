import managment from './Managment.css';
import Tablep from '../components/Tablep';

const Managment =()=>{
    return(
        <div style={{managment}}>
            <h2 className="text-center">
                Product Managment Page
            </h2>
            <Tablep/>
        </div>
    );
}
export default Managment;