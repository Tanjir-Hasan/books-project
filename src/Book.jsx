import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        //  hover:bg-slate-950 hover:opacity-25
        <Link to={`../book/${book.isbn13}`}>
            <div className='border-2 border-neutral-200 mx-auto relative rounded-lg'>
                <img className='mx-auto' src={book.image} alt="" />

                <div className='flex flex-col absolute inset-0 text-center justify-center bg-black bg-opacity-75 text-gray-200 rounded-lg px-5 py-7 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <h3>{book.title}</h3>
                    <p className='mt-auto'>{book.subtitle.substring(0, 50)}...</p>
                    <p className='text-red-400 mt-auto'>Price: {book.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;