import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Blog
import DashboardLayout from "../layout/Dashboard";

// Admin Pages
import AdminLayout from "../pages/admin";
import Login from "../pages/auth/login";

// Private Routes
import PrivateRoutes from "../hooks/privateRoutes";

function AppRoute() {
    return (
        <>
            <Routes>
                {/* Page Blog Routes */}
                <Route path="/" element={<DashboardLayout />} />

                {/* Private Page for Admin */}
                <Route path="/admin" element={<PrivateRoutes />}>
                    <Route path="/admin/dashboard" element={<AdminLayout />} />
                </Route>

                {/* Login Page Routes */}
                <Route path="/login" element={<Login />} />

            </Routes>
        </>
    )
}

export default AppRoute