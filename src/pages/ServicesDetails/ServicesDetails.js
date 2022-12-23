import React, { useContext, useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';
import { Helmet } from 'react-helmet-async';

const ServicesDetails = () => {
    const [data] = useLoaderData()
    const { user } = useContext(contexApi)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const { title, img, price, review, _id, details } = data;


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const text = form.text.value;
        const name = form.name.value;


        const review = {
            text,
            name,
            img: user.photoURL,
            email: user.email,
            serviceId: _id,
            serviceName: title,
        }

        fetch('https://travel-up-server-dipta-sarker.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    form.reset()
                    alert('Review Added Successfully')
                    navigate('/myReviews')
                }
            })
            .catch(e => console.error(e))
    }


    useEffect(() => {
        fetch('https://travel-up-server-dipta-sarker.vercel.app/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='my-20 grid lg:grid-cols-2 gap-10 justify-items-center '>
                <Helmet><title>Services Details</title></Helmet>
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


                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Text</th>
                                    <th>Place</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reviews.map(review => <tr key={review._id}>
                                        <td>{review.name}</td>
                                        <td>{review.text}</td>
                                        <td>{review.serviceName}</td>
                                        <td className="w-24"><img className='rounded-full' src={review.img} alt="" /></td>
                                    </tr>)

                                }


                            </tbody>
                        </table>
                    </div>
                </div>


                {user?.email ?
                    <div className="card w-full mr-10 mt-20 shadow-2xl bg-base-200">
                        <h1 className='text-center font-bold text-4xl'>Add Review</h1>
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
                                <input type="text" defaultValue={user.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Services Name</span>
                                </label>
                                <input type="text" defaultValue={title} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    :
                    <h1 className='mt-20 text-center font-bold text-4xl'>Please <Link className='text-orange-500' to='/login'>login</Link> to add a review</h1>
                }
            </div>

        </div>



    );
};

export default ServicesDetails;