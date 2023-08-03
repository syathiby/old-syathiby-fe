import React, { useState } from 'react';
import { API_URL } from '../../../middleware/services/api';
import { getNama, getPhoto, getRole, logoutUser } from '../../../middleware/auth/authApi';
import { CaretUpOutlined, CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';

import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { routes } from '../../../router/routesConfig';

const Sidebar = ({ isOpen }) => {
  const currentUserRole = getRole();
  const location = useLocation();

  const initialDropdownState = routes.reduce((acc, item) => {
    if (item.children) {
      acc[item.name] = false;
    }
    return acc;
  }, {});

  const [isDropdownOpen, setIsDropdownOpen] = useState(initialDropdownState);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (name) => {
    setIsDropdownOpen((prevDropdownState) => ({
      ...prevDropdownState,
      [name]: !prevDropdownState[name],
    }));
  };

  const renderMenuItem = (item) => {
    const itemRole = item.role || [];

    if (itemRole.includes("all") || itemRole.includes(currentUserRole)) {
      if (item.children) {
        const isParentOpen = isDropdownOpen[item.name];

        return (
          <li key={item.name}>
            <button
              onClick={() => handleDropdownToggle(item.name)}
              className={`flex w-full items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 group ${
                isParentOpen ? 'bg-blue-200 dark:bg-gray-700' : ''
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </div>
              <div className="flex items-center">
                {isParentOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </div>
            </button>
            {isParentOpen && (
              <ul className="pl-4 w-full">
                {item.children.map((child) =>
                  (child.role || []).includes("all") || (child.role || []).includes(currentUserRole) ? (
                    <li key={child.name}>
                      <NavLink
                        to={child.path}
                        className={`flex items-center p-2 text-gray-900 my-2 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 group ${
                          location.pathname === child.path ? 'bg-blue-200 dark:bg-gray-700' : ''
                        }`}
                        activeclassname="bg-blue-200 dark:bg-gray-700"
                      >
                        {child.icon}
                        <span className="ml-4">{child.name}</span>
                      </NavLink>
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </li>
        );
      } else {
        return (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 group ${
                location.pathname === item.path ? 'bg-blue-200 dark:bg-gray-700' : ''
              }`}
              activeclassname="bg-blue-200 dark:bg-gray-700"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </NavLink>
          </li>
        );
      }
    }

    return null;
  };

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 py-20 overflow-y-auto bg-white dark:bg-gray-800">
        <div className="text-center my-5">
          <div className="flex justify-center">
            <img
              src={`${API_URL}/upload/profile/${getPhoto()}`}
              className="rounded-full h-20 w-20 border-2 border-slate-500"
              alt="profile"
            />
          </div>
          <p className="mt-4 font-semibold">{getNama()}</p>
        </div>
        <ul className="space-y-2 font-medium">
          {routes.map((item) => renderMenuItem(item))}
        </ul>
        <ul className="space-y-2 font-medium">
          <li className="absolute w-56 bottom-0">
            <a
              onClick={logoutUser}
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 group"
            >
              <LogoutOutlined />
              <span className="ml-3">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
