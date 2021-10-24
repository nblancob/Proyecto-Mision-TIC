import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Home from "./home/pages/Home";
import Managment from "./product-managment/pages/Managment";
import Registration from "./product-managment/pages/Registration";
import SManagment from "./sales-managment/pages/Smanagment";
import SRegistration from "./sales-managment/pages/Sregistration";
import UManagment from "./user-managment/pages/Usmanagment";
import Header from "./shared/Header";
import imgGLogin from "./home/pages/img/logo192.png";
import PrivateRoute from "./shared/components/PrivateRoutes";
import PrivateRouteSeller from "./shared/components/PrivateRouteSeller";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [profilePic, setProfilePic] = useState(imgGLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState("");


  return (
    <div style={{}}>
      <Router>
        <Header nombre={nombre} profilePic={profilePic} rol={rol}/>
        <Switch>
          <Route path="/" exact>
            <Home
              setRol={setRol}
              setNombre={setNombre}
              setProfilePic={setProfilePic}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <PrivateRoute rol={rol} path="/product/managment" exact>
            <Managment />
          </PrivateRoute>
          <PrivateRoute rol={rol} path="/product/registration" exact>
            <Registration />
          </PrivateRoute>
          <PrivateRouteSeller rol={rol} path="/sale/managment" exact>
            <SRegistration />
          </PrivateRouteSeller>
          <PrivateRouteSeller rol={rol} path="/sale/registration" exact>
            <SManagment />
          </PrivateRouteSeller>
          <PrivateRoute rol={rol} path="/user/managment" exact>
            <UManagment />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
