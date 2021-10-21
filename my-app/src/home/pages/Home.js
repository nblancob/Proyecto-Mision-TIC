import Card from "react-bootstrap/Card";
import home from "./Home.css";
import Imglogin from "./img/Imglogin.jpg";
import GoogleLogin from "react-google-login";

const Login = (res) => {
  console.log(res);
};

const LoginError = (err) => {
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
                clientId="96617027916-7u84fd75j683njsglsuavbt1fgqdn773.apps.googleusercontent.com"
                buttonText="Login"
                className="Google-btn"
                style={{ home }}
                onSuccess={Login}
                onFailure={LoginError}
                cookiePolicy={"single_host_origin"}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
