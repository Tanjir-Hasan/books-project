import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between align-middle text-xl font-medium text-blue-700 bg-slate-200 max-w-7xl mx-auto my-3 px-4 py-4 h-16 rounded-xl shadow-lg'>
                <div className='inline-flex'>
                    <BookOpenIcon className="h-8 w-6 text-blue-500" />
                    <h1 className=''>Bibliophile's Corner</h1>
                </div>
                <div className='grid gap-5 grid-cols-3'>
                    <Link to="/">Home</Link>
                    <Link to="/books">Shop</Link>
                    <Link to="/About">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;