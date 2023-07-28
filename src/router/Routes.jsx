import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Blog
import DashboardLayout from "../pages/blog/Dashboard";

// Admin Pages
import Login from "../pages/auth/login";

// Private Routes
import PrivateRoutes from "../hooks/privateRoutes";
import DetailPost from "../pages/blog/Detail";

import { routes } from "./routesConfig";

// Dashboard Blog Defaults
import DBlog from "../pages/admin/dBlog";

function AppRouter() {

    return (
        <div className="App">
          <Routes>
            {/* Page Blog Routes */}
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/artikel/:name/:link" element={<DetailPost />} />

            {/* Routes Role */}
            <Route path="/admin" element={<PrivateRoutes />}>
              <Route index element={<DBlog />} />
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
                      {route.children.map((childRoute, childIndex) => {
                        if (childRoute.secondary && childRoute.page) {
                          return childRoute.page.map((subRoute, subIndex) => (
                            <Route
                              key={subIndex}
                              path={subRoute.path}
                              element={subRoute.component}
                            />
                          ));
                        }
                        return null;
                      })}
                    </Route>
                  );
                } else {
                  return (
                    <Route key={index} path={route.path} element={route.component} />
                  );
                }
              })}
            </Route>
    
            {/* Login Page Routes */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      );
}

export default AppRouter
