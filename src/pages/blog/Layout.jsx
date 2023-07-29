import React from "react";
import Navbar from "./component/navbar";
import FooterN from "./component/footer";

const Layout = ({children}) => {

    return (
        <>
            <div className="py-4 dark:bg-gray-900 px-4 shadow-sm">
                <Navbar />
            </div>
            <main  className="py-2">
                {children}
            </main>
            <FooterN />
        </>
    )

}

export default Layout