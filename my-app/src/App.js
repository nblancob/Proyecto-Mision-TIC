import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './home/pages/Home';
import Managment from './product-managment/pages/Managment';
import Registration from './product-managment/pages/Registration';
import SManagment from './sales-managment/pages/Smanagment';
import SRegistration from './sales-managment/pages/Sregistration';
import UManagment from './user-managment/pages/Usmanagment';
import Header from './shared/Header';


const App= () => {
  return (
    <Router>
      <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
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
  );
}

export default App;
