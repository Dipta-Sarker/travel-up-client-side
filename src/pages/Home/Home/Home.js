import React from 'react';
import Carousel from '../Carousel/Carousel';
import Display from '../Display/Display';
import Explore from '../Explore/Explore';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='my-5'>
            <Carousel></Carousel>
            <Services></Services>
            <Explore></Explore>
            <Display></Display>
        </div>
    );
};

export default Home;