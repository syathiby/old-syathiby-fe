import { API_URL } from '../../../middleware/services/api';
import { getNama, getPhoto, getRole, logoutUser } from '../../../middleware/auth/authApi';
import React, { useState, useEffect, useRef } from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';

const Navbar = ({ onSidebarToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={onSidebarToggle}
              type="button"
              className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <AlignLeftOutlined />
            </button>
            <a href="/admin" className="flex ml-2 md:mr-24">
              <img
                src={`${API_URL}/upload/logo/logo.png`}
                className="h-8 mr-3"
                alt="syathiby-logo"
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3 relative" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen ? 'true' : 'false'}
                  onClick={handleDropdownToggle}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={`${API_URL}/upload/profile/${getPhoto()}`}
                    alt="user photo"
                  />
                </button>
              </div>
              {isDropdownOpen && (
                <div className="z-50 absolute right-0 mt-44 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="w-44 px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {getNama()}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                      {getRole()}
                    </p>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={logoutUser}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
