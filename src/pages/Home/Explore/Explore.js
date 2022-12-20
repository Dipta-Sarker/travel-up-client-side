import React from 'react';
import explore from '../../../images/explore.jpg';
const Explore = () => {
    return (
        <div className='grid md:grid-cols-2 p-10'>
            <div className='pr-5'>
                <h3 className='text-lg font-bold'>ABOUT US</h3>
                <h1 className='text-3xl my-4 font-extrabold'>Explore All Corners of The World With Us</h1>
                <p className='text-lg font-bold'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className='text-lg font-bold my-3'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <button className="btn btn-outline btn-success">Read More</button>
            </div> 
            <div>
                <img src={explore} alt="" />
            </div>
        </div>
    );
};

export default Explore;