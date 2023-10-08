import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoute({children}) {

    const auth = false;
  
  return (

     auth ? children : <Navigate to="/notloggedin" />
    
  );
}

export default PrivateRoute;