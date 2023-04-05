import React from 'react';

const Loading = () => {
    return (

        <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
            <p className='text-7xl'>L</p>
            <div className='w-12 h-12 border-8 animate-spin border-dashed rounded-full border-sky-400'></div>
            <p className='text-5xl'>ading.....</p>
        </div>
    );
};

export default Loading;