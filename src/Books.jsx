import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const allBooks = useLoaderData();
    return (
        <div className='grid grid-cols-4 max-w-7xl mx-auto my-3 gap-4 p-4'>
            {
                allBooks.books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;