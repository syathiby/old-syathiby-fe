import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Blog
import DashboardLayout from "../pages/blog/Dashboard";
import ArtikelAll from "../pages/blog/artikel";
import ArtikelLabel from "../pages/blog/Label";
import DetailPost from "../pages/blog/Detail";

// Private Routes
import PrivateRoutes from "../hooks/privateRoutes";
import { routes } from "./routesConfig";

// Login Pages
import Login from "../pages/auth/login";

// Admin Pages
// Dashboard Blog Defaults
import DBlog from "../pages/admin/dBlog";

// Import Error Pages!
import NotFound404 from "../pages/error/NotFound";

function AppRouter() {

    return (
        <div className="App">
          <Routes>
            {/* Page Blog Routes */}
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/artikel" element={<ArtikelAll />} />
            <Route path="/artikel/:name" element={<ArtikelLabel />} />
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

              {/* 404 Page */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      );
}

export default AppRouter
