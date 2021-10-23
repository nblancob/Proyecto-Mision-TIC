import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import imgGLogin from "../img/logo192.png";
import home from "../Home.css";

const GoogleLogInOut = ({
  setNombre,
  setProfilePic,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const Login = (res) => {
    
    
    setNombre(res.profileObj.givenName);
    setProfilePic(res.profileObj.imageUrl);
    setIsLoggedIn(true);
  };

  const LoginError = (err) => {
    console.error(err);
  };

  const logout = (res) => {
    setNombre("");
    setProfilePic(imgGLogin);
    setIsLoggedIn(false);
  };

  if (isLoggedIn === false) {
    return (
      <div>
        <GoogleLogin
          clientId="377435207139-t6jli9d6u42heij1jk11if8heb52fvpu.apps.googleusercontent.com"
          buttonText="Login"
          className="Google-btn"
          style={{ home }}
          onSuccess={Login}
          onFailure={LoginError}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  } else {
    return (
      <div>
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          className="Google-btn"
          style={{ home }}
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    );
  }
};

export default GoogleLogInOut;
