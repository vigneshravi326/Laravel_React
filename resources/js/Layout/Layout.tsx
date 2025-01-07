import React from 'react';
import {Navbar} from "../Components/Navbar";
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={'bg-symbol-master'}>
            <Navbar/>
            {children}
        </div>
    );
};
