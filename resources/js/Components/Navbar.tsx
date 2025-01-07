import React from 'react';
import {Link} from "@inertiajs/react";
export const Navbar = () => {
    return (
        <div className={'p-5 bg-transparent text-white flex items-center justify-between w-full text-xl'}>
            <img src="https://www.symbolmaster.com/wp-content/uploads/2024/03/Logo.png" alt="symbol-master-logo" height={10} width={200} />

            <div className={'flex items-center gap-6 font-normal'}>
                <Link href={'/'}><button className={'text-white'}>Service</button></Link>
                <Link href={'/'}><button className={'text-white'}>Coverage</button></Link>
                <Link href={'/'}><button className={'text-white'}>About</button></Link>
                <Link href={'/'}><button className={'text-white'}>Insights</button></Link>
                <Link href={'/'}><button className={'text-white'}>Partners</button></Link>
                <Link href={'/'}><button className={'text-white'}>Contact</button></Link>
            </div>

            <div className={'flex items-center gap-4'}>
                <button className={'rounded-full px-5 py-2'}>Contact</button>
                <button className={'bg-white text-black rounded-full px-5 py-2'}>Login</button>
            </div>

        </div>
    );
};
