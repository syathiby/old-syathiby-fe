import { Outlet, Navigate } from "react-router-dom";

import { isAuthenticated } from "../middleware/auth/authApi";

const PrivateRoutes = () => {

    const auth = isAuthenticated();
    return auth ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRoutes;