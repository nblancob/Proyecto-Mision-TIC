import { useState } from "react";
import UserPage from "./components/UserPage";
import UserTable from "./components/UserTable";

const Usmanagment = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h2 className="title text-center mt-5 mb-2">GESTIÓN DE USUARIOS</h2>
      <UserPage users={users} setUsers={setUsers} />
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};
export default Usmanagment;
