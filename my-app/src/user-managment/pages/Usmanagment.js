import UserPage from "./components/UserPage";
import UserTable from "./components/UserTable";

const Usmanagment = () =>{
    return(
        <div>
            <h2 className=" title text-center">
                GESTION DE USUARIOS
            </h2>
            <UserPage/>
            <UserTable/>
        </div>
    );
}
export default Usmanagment;