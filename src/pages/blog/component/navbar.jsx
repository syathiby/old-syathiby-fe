import { useEffect, useState } from "react";
import { API_URL } from "../../../middleware/services/api"

function Navbar() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = (event) => {
        setTheme(event.matches ? 'dark' : 'light');
        };

        updateTheme(mediaQuery); 

        mediaQuery.addEventListener('change', updateTheme);
        return () => {
        mediaQuery.removeEventListener('change', updateTheme);
        };
    }, []);

    return(
        <>
            <div className="navbar relative z-50 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    {theme === 'light' ? (
                        <a href="/">
                            <img src={`${API_URL}/upload/logo/horizontal.png`} className="h-16" alt="" />
                        </a>
                    ) : (
                        <a href="/">
                            <img src={`${API_URL}/upload/logo/white.png`} className="h-16" alt="" />
                        </a>
                    )}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li tabIndex={0}>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a href="https://syathiby.id/">PPDB</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </>
    )

}

export default Navbar