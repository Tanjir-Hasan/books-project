import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <div className='border-2 border-neutral-200 hover:bg-slate-950 hover:opacity-25'>
            <Link to={`../book/${book.isbn13}`}>
                <img src={book.image} alt="" />
            </Link>
        </div>
    );
};

export default Book;