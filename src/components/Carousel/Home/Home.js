import React from 'react';
import Header from '../../Header/Header';
import Hero from '../../Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Hero></Hero>
        </div>
    );
};

export default Home;