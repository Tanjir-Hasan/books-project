import React from 'react';
import Lottie from "lottie-react";
import idea from "./assets/107918-reading-writing-studying-knowledge-books.json";

const About = () => {
    return (
        <div className='max-w-6xl mx-auto px-3'>
            <h1 className='sm:col-span-1 text-3xl font-bold text-center my-10'>Discover Your Next Adventure Here.</h1>
            <p className='text-center inline-block'>As soon as you walk through our doors, you'll be greeted by a warm and welcoming atmosphere that's designed to make you feel at home. Our comfortable seating areas, soft lighting, and soothing background music provide the perfect ambiance for curling up with a good book and forgetting about the outside world for a while.</p>
            <Lottie className='w-full h-96' animationData={idea} loop={true} />
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                <div className='bg-slate-100 shadow-lg rounded-xl p-3 lg:col-start-1 lg:col-span-2'>
                    <p className='font-semibold'>Expand Your Reading Horizons:</p>
                    <p>Our book club selects a diverse range of books, including contemporary bestsellers, classic literature, and lesser-known works of fiction and non-fiction. By joining our book club, you'll have the opportunity to read books that you may not have otherwise picked up, and to discover new authors and genres that you may have overlooked.</p>
                </div>
                <div className='bg-slate-100 shadow-lg rounded-xl p-3 lg:col-span-2'>
                    <p className='font-semibold'>Stimulate Your Mind:</p>
                    <p>Reading is a great way to stimulate your mind and challenge yourself intellectually. Our book club discussions offer the perfect opportunity to delve deeper into the themes and ideas presented in the books we read, and to engage in thoughtful and stimulating conversations with other members.</p>
                </div>
                <div className='lg:col-start-2 col-span-2 bg-slate-100 shadow-lg rounded-xl p-3'>
                    <p className='font-semibold'>Connect with Other Book Lovers:</p>
                    <p>Our book club provides a welcoming and supportive environment where you can connect with other book lovers who share your passion for reading. Whether you're a lifelong reader or just starting to explore the world of literature, our book club is the perfect place to meet new people and make new friends.</p>
                </div>
                <div className='bg-slate-100 shadow-lg rounded-xl p-3 lg:col-span-2'>
                    <p className='font-semibold'>Discover New Perspectives:</p>
                    <p>Reading is a great way to broaden your perspective and gain new insights into the world around you. Our book club selects books that explore a range of themes and issues, and provides a forum for members to discuss and reflect on these topics in a supportive and respectful environment.</p>
                </div>
                <div className='bg-slate-100 shadow-lg rounded-xl p-3 lg:col-span-2'>
                    <p className='font-semibold'>Enjoy Exclusive Benefits:</p>
                    <p>Our book club members enjoy a range of exclusive benefits, including discounts on books, priority access to author events and readings, and invitations to members-only events and activities.</p>
                </div>
                <div className='lg:col-start-1 lg:col-span-4 col-span-2 bg-slate-100 shadow-lg rounded-xl p-3'>
                    <p className='font-semibold'>Flexibility and Convenience:</p>
                    <p>Our book club offers flexible meeting schedules and a range of online options, including virtual discussions and online forums, to make it easy and convenient for you to participate. Whether you prefer to meet in person or engage online, our book club provides a variety of options to fit your schedule and lifestyle.</p>
                </div>
            </div>
        </div>
    );
};

export default About;