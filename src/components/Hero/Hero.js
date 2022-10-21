import React from 'react';
import Carousel from '../Carousel/Carousel';

const Hero = () => {
    return (
        <div className='h-4/5 flex'>
            <div className='w-1/2'>
                <h1>Hello left</h1>
            </div>
            <div className='w-1/2'>
                <Carousel></Carousel>
            </div>
        </div>
    );
};

export default Hero;