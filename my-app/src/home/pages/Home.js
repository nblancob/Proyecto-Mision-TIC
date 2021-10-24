import Card from "react-bootstrap/Card";
import home from "./Home.css";
import Imglogin from "./img/Imglogin.jpg";
import GoogleLogInOut from "./components/GoogleLogInOut";
import { useEffect } from "react";
import api from "../../Api";

const Home = ({
  setNombre,
  setProfilePic,
  setIsLoggedIn,
  isLoggedIn,
  setRol,
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const ProfilePic = localStorage.getItem("ProfilePic");

    if (token === null) {
      setIsLoggedIn(false);
      setRol(" ")
    } else {
      setIsLoggedIn(true);
      setNombre(name);
      setProfilePic(ProfilePic);
      const fetchData = async () => {
        const response = await api.user.validateAdm();
        setRol(response);
      };
      fetchData();
    }
  });

  return (
    <div className="container" style={{ home }}>
      <div className="abs-center">
        <Card className="card">
          <Card.Title className="text-center text-white mt-3">
            BIENVENIDO
          </Card.Title>
          <Card.Img
            variant="top"
            src={Imglogin}
            className="image align-self-center"
          />

          <Card.Body>
            <Card.Title className="title_card text-white">
              Ingresa con Google
            </Card.Title>
            <GoogleLogInOut
              setNombre={setNombre}
              setProfilePic={setProfilePic}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
