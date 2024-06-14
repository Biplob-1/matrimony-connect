import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/sign-in' state={{from: location}} replace></Navigate>
};
export default AdminRoute;