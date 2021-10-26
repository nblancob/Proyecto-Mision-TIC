import GoogleLogin from "react-google-login";
import imgGLogin from "../img/logo192.png";
import home from "../Home.css";
import Button from "@restart/ui/esm/Button";
import { useEffect } from "react";
import api from "../../../Api";

const GoogleLogInOut = ({
  setNombre,
  setProfilePic,
  setIsLoggedIn,
  isLoggedIn,
  setRol,
}) => {
  useEffect(() => {
    const ProfilePic = localStorage.getItem("ProfilePic");
    const rol = localStorage.getItem("rol");
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setNombre(name);
      setProfilePic(ProfilePic);
      setRol(rol);
    }
  });

  const Login = (response) => {
    localStorage.setItem("token", response.tokenId);

    api.user.getUser().then((res) => {
      if (res.Estado === true) {
        localStorage.setItem("name", response.profileObj.givenName);
        localStorage.setItem("ProfilePic", response.profileObj.imageUrl);
        localStorage.setItem("rol", res.Rol);
        setNombre(response.profileObj.givenName);
        setProfilePic(response.profileObj.imageUrl);
        setRol(res.Rol);
        setIsLoggedIn(true);
      } else if (res === "inactivo") {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
      } else {
        localStorage.setItem("name", response.profileObj.givenName);
        localStorage.setItem("ProfilePic", response.profileObj.imageUrl);
        setNombre(response.profileObj.givenName);
        setProfilePic(response.profileObj.imageUrl);
      }
    });
  };

  const LoginError = (err) => {
    console.error(err);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("ProfilePic");
    localStorage.removeItem("rol");
    setNombre("");
    setProfilePic(imgGLogin);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <Button
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          className="Google-btn"
          style={{ home }}
          onClick={Logout}
        >
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <GoogleLogin
          clientId="96617027916-7u84fd75j683njsglsuavbt1fgqdn773.apps.googleusercontent.com"
          buttonText="Login"
          className="Google-btn"
          style={{ home }}
          onSuccess={Login}
          onFailure={LoginError}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
};

export default GoogleLogInOut;
