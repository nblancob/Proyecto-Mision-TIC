import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ rol, children, ...rest }) => {
  let auth = localStorage.getItem("token");
  let validate = false;
  if (rol === "Administrador") {
    validate = true;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        validate && auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
