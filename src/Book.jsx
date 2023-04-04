import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Book = ({ book }) => {
    const bookDetails = useLoaderData();
    console.log(bookDetails)
    return (
        <div>
            <Link to={`../book/${book.isbn13}`}>
                <img src={book.image} alt="" />
            </Link>
        </div>
    );
};

export default Book;