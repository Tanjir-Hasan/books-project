import React, { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className='flex justify-between align-middle text-xl font-medium text-blue-700 bg-slate-200 max-w-7xl mx-auto my-3 px-4 py-4 h-16 rounded-xl shadow-lg'>
                <div className='inline-flex'>
                    <BookOpenIcon className="lg:flex h-8 w-6 text-blue-500" />
                    <h1>Bibliophile's Corner</h1>
                </div>
                <div className=" md:hidden fixed z-10 top-8 right-4" onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen === true ? <BarsArrowUpIcon className="h-6 w-6 text-blue-500" /> : <BarsArrowDownIcon className="h-6 w-6 text-blue-700" />
                    }
                </div>
                <div className={`md:flex gap-4 duration-500 ${isOpen ? 'top-48' : '-top-48 hidden'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/books">Shop</Link>
                    <Link to="/About">About</Link>
                </div>
            </div>

        </nav>
    );
};

export default Header;