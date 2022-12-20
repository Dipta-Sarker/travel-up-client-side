import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const [data] = useLoaderData()
    const { title, img, price, review, _id, details } = data;


    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const text = form.text.value;
        const name = form.name.value;
        const email = form.email.value;
        console.log(text,name,email)
        
    }

    return (
        <div className='my-20 grid lg:grid-cols-2 gap-10 justify-items-center '>
            <div>
                <div className="card w-96  shadow-xl bg-success text-primary-content">
                    <figure className="px-5  pt-5">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-4xl">{title}</h2>
                        <p>{details}</p>
                        <p className='font-bold text-2xl'>$ {price}</p>
                        <div className='flex items-center'>
                            <p className='font-bold text-2xl'>{review}</p>

                            <span className='flex ms-3'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6  text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full'>
            <h1 className='text-center font-bold text-4xl border-b-4 border-emerald-500'>Review</h1>

                <div className="card w-full mr-10 mt-20 shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Text</span>
                            </label>
                            <input type="text" name='text' placeholder="Write your review" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>



    );
};

export default ServicesDetails;