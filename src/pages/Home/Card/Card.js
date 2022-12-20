import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service,btn }) => {
  const {review, img, details, price, title,_id } = service;
  console.log(service.length)
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
      <PhotoProvider>
      <PhotoView src={img}>
      <figure><img src={img} alt="Shoes" /></figure>
      </PhotoView>
    </PhotoProvider>

        <div className="card-body">
          <h2 className="card-title font-bold">
            {title}
          </h2>
          {btn === 2 ?
            <p>{details}</p>:
            <p>{details.slice(0, 100) + '...'} <Link to='/' className='text-green-500'>read more</Link></p>
            }

            {btn === 2 ?
            <div className='flex'>
                <p className='text-violet-600 font-bold'>$ {price}</p>
               <div className='flex'>
               <p className='font-semibold'>{review}</p>
                <StarIcon className="h-6 w-6 text-yellow-500"/>
                <StarIcon className="h-6 w-6  text-yellow-500"/>
                <StarIcon className="h-6 w-6 text-yellow-500"/>
               </div>
            </div>:
                <p className='text-violet-600 font-bold'>$ {price}</p>
            }

        

          <div className='text-center'>
            {btn === 2 ? 
              <Link to={`/details/${_id}`}>
                <button className=" btn btn-primary">View Details</button>
              </Link> :
              <></>

            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;