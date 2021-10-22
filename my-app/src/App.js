import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState } from "react";
import Home from './home/pages/Home';
import Managment from './product-managment/pages/Managment';
import Registration from './product-managment/pages/Registration';
import SManagment from './sales-managment/pages/Smanagment';
import SRegistration from './sales-managment/pages/Sregistration';
import UManagment from './user-managment/pages/Usmanagment';
import Header from './shared/Header';
import imgGLogin from "./home/pages/img/logo192.png"


const App= () => {
  const [nombre, setNombre] = useState("");
  const [profilePic, setProfilePic] = useState(imgGLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{}}>
    <Router>
      <Header nombre={nombre} profilePic={profilePic}/>
    <Switch>
      <Route path="/" exact>
        <Home setNombre={setNombre} setProfilePic={setProfilePic} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/product/managment" exact>
        <Managment />
      </Route>
      <Route path="/product/registration" exact>
        <Registration />
      </Route>
      <Route path="/sale/managment" exact>
        <SManagment />
      </Route>
      <Route path="/sale/registration" exact>
        <SRegistration />
      </Route>
      <Route path="/user/managment" exact>
        <UManagment />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
  </div>
  );
}

export default App;
