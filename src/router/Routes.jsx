import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Blog=
import DashboardLayout from "../pages/blog/Dashboard";

// Admin Pages
import Login from "../pages/auth/login";

// Private Routes
import PrivateRoutes from "../hooks/privateRoutes";
import DetailPost from "../pages/blog/Detail";

import { routes } from "./routesConfig";
import DBlog from "../pages/admin/dBlog";

function AppRoute() {

    return (
        <>
            <Routes>
                {/* Page Blog Routes */}
                <Route path="/" element={<DashboardLayout />} />
                <Route path="/post/:link" element={<DetailPost />} />

                {/* Private Page for Admin */}
                <Route path="/admin" element={<PrivateRoutes />}>
                    <Route index element={<DBlog />} />
                    {/* Map through the routes array and generate the Route components */}
                        {routes.map((route, index) => {
                            if (route.children) {
                            return (
                                <Route key={index} element={route.component}>
                                {route.children.map((childRoute, childIndex) => (
                                    <Route
                                    key={childIndex}
                                    path={childRoute.path}
                                    element={childRoute.component}
                                    />
                                ))}
                                </Route>
                            );
                            } else {
                            return (
                                <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                                />
                            );
                            }
                        })}
                </Route>

                {/* Login Page Routes */}
                <Route path="/login" element={<Login />} />

            </Routes>
        </>
    )
}

export default AppRoute