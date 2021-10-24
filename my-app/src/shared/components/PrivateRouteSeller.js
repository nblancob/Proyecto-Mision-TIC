import { Route, Redirect } from "react-router-dom";

const PrivateRouteSeller = ({ rol, children, ...rest }) => {
  let auth = localStorage.getItem("token");
  let validate = false;
  if (rol === "Administrador" || rol === "Vendedor") {
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

export default PrivateRouteSeller;
