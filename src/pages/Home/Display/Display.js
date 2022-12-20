import React from 'react';
import img1 from '../../../images/card-1.jpg'
import img2 from '../../../images/card-2.jpg'
import img3 from '../../../images/card-3.jpg'

const Display = () => {
    return (
        <div className='grid md:grid-cols-3 justify-items-center gap-10 my-20'>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-6xl">Thailand</h1>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-6xl">Bangladesh</h1>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-6xl">Singapore</h1>

                </div>
            </div>
        </div>
    );
};

export default Display;