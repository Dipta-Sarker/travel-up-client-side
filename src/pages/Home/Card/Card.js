import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    const {img,details,price,review,title} = service;
    console.log(img)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      {title}
    </h2>
    {details.length > 100 ?
    <p>{details.slice(0,100)+ '...'} <Link to='/' className='text-green-500'>read more</Link></p>:
    <p>{details}</p>}
    <p className='text-violet-600 font-bold'>$ {price}</p>
    
  </div>
</div>
        </div>
    );
};

export default Card;