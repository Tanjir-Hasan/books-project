import React from 'react';
import Lottie from "lottie-react";
import idea from "./assets/98297-book-idea.json";
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Banner = () => {
    return (
        <div className='lg:flex lg:max-w-7xl mx-auto'>
            <div className='my-auto'>
                <h1 className='text-4xl font-bold'>Are You a Lost ? Come Find Your <span className='text-blue-700'>Next Sanctuary Here</span>.</h1>
                <br />
                <p className='text-xl'>As soon as you walk through our doors, you'll be greeted by a warm and welcoming atmosphere that's designed to make you feel at home. Our comfortable seating areas, soft lighting, and soothing background music provide the perfect ambiance for curling up with a good book and forgetting about the outside world for a while.</p>
                <div className='mt-3'>
                    <div className='inline-flex overflow-hidden'>
                        <div className="button-container flex items-center">
                            <button className='text-white bg-blue-400 p-3 rounded-lg hover:bg-blue-500'>
                                <Link>Visit Store</Link>
                            </button>
                            <ShoppingBagIcon className="h-6 w-6 text-red-500 ml-2" />
                        </div>
                    </div>

                    <Link to="" className='font-bold ml-3'>Learn More</Link>
                </div>
            </div>
            <div className=''>
                <Lottie animationData={idea} loop={true} />
            </div>
        </div>
    );
};

export default Banner;