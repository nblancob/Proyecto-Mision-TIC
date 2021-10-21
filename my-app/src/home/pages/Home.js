import Card from "react-bootstrap/Card";
import home from "./Home.css";
import Imglogin from "./img/Imglogin.jpg";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from 'react-google-login';

const Login = (res) => {
  console.log(res);
};

const LoginError = (err) => {
  console.error(err);
};

const logout = (err) => {
  console.error(err);
};

const Home = () => {
  return (
    <div className="container" style={{ home }}>
      <div className="abs-center">
        <Card className="card">
          <Card.Title className="text-center">BIENVENIDO</Card.Title>
          <Card.Img
            variant="top"
            src={Imglogin}
            className="image align-self-center"
          />
          {/* <a href='https://www.freepik.es/fotos/madera'>Foto de Madera creado por jcomp - www.freepik.es</a> */}
          <Card.Body>
            <Card.Text>
                <Card.Title className="title_card">Ingresa con Google</Card.Title>
              <GoogleLogin
                clientId="377435207139-t6jli9d6u42heij1jk11if8heb52fvpu.apps.googleusercontent.com"
                buttonText="Login"
                className="Google-btn"
                style={{ home }}
                onSuccess={Login}
                onFailure={LoginError}
                cookiePolicy={"single_host_origin"}
              />
              <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                className="Google-btn"
                style={{ home }}
                onLogoutSuccess={logout}
              >
              </GoogleLogout>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
