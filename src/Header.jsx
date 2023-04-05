import React, { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import ActiveLink from './ActiveLink';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className='relative text-xl font-medium bg-slate-200 max-w-7xl mx-auto my-3 px-4 py-4 h-16 rounded-xl shadow-lg'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <BookOpenIcon className='lg:flex h-8 w-6 text-blue-500' />
                        <Link to='/' className='ml-2 text-xl lg:text-2xl text-blue-700'>Bibliophile's Corner</Link>
                    </div>
                    <div className='hidden gap-3 lg:block'>
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/books'>Shop</ActiveLink>
                        <ActiveLink to='/about'>About</ActiveLink>
                    </div>
                </div>                
            </div>
            <span className='md:hidden absolute top-7 right-3' onClick={() => setIsOpen(!isOpen)}>
                {isOpen === true ? (
                    <BarsArrowUpIcon className='h-8 w-6 text-blue-500' />
                ) : (
                    <BarsArrowDownIcon className='h-8 w-6 text-blue-700' />
                )}
            </span>

            {isOpen === true && (
                <div className='flex flex-col w-full text-center bg-slate-200'>
                    <Link to='/' className='my-2'>
                        Home
                    </Link>
                    <Link to='/books' className='my-2'>
                        Shop
                    </Link>
                    <Link to='/about' className='my-2'>
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;