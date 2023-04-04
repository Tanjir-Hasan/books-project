import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const details = useLoaderData();
    const { image, title, authors, publisher, language, year, rating, desc, price } = details;
    return (
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <div className='w-1/2 pr-6'>
                <img src={image} alt='image' className='w-full h-auto' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-3xl font-mono mb-4'>{title}</h1>
                <p><span className='font-sans font-semibold'>Author:</span> {authors}</p>
                <p><span className='font-sans font-semibold'>Publisher:</span> {publisher}</p>
                <p><span className='font-sans font-semibold'>Year:</span> {year}</p>
                <p><span className='font-sans font-semibold'>Rating:</span> {rating}</p>
                <p>{desc}</p>
                <Link><button className='text-white bg-blue-400 p-3 rounded-lg hover:bg-blue-500'>Buy Now</button></Link>
                <p className='font-bold'>Price: {price}</p>
            </div>
        </div>

    );
};

export default BookDetails;