import { Navigate, Outlet } from "react-router";

function ProtectedRoute () {

    const userProfile = localStorage.getItem("isLogged");

    return ( userProfile ? <Outlet /> : <Navigate to="/login" /> );
    
}

export default ProtectedRoute;