import React, { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className='relative text-xl font-medium text-blue-700 bg-slate-200 max-w-7xl mx-auto my-3 px-4 py-4 h-16 rounded-xl shadow-lg'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <BookOpenIcon className='lg:flex h-8 w-6 text-blue-500' />
                        <h3 className='ml-2 text-xl lg:text-2xl'>Bibliophile's Corner</h3>
                    </div>
                    <div className='hidden lg:block'>
                        <Link to='/' className='mr-4'>Home</Link>
                        <Link to='/books' className='mr-4'>Shop</Link>
                        <Link to='/about' className='mr-4'>About</Link>
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