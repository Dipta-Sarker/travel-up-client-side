import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { contexApi } from '../../AuthContex/AuthContex';

const MyReviews = () => {
    const { user } = useContext(contexApi);
    const [myReview, setMyReview] = useState([])



    useEffect(() => {
        fetch(`https://travel-up-server-dipta-sarker.vercel.app/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`https://travel-up-server-dipta-sarker.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const review = myReview.filter(rview => rview._id !== id)
                    setMyReview(review)
                    alert('Delete Successfully')
                }
            })

    }

    const handleUpdate = (id) => {
        fetch(`https://travel-up-server-dipta-sarker.vercel.app/reviews/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successfully')
                }
            })
    }

    return (
        <div>
                <Helmet><title>My Reviews</title></Helmet>
            <div className='my-10 grid md:grid-cols-2 gap-2 justify-items-center'>
                {myReview.length > 0 ?
                    myReview.map(review => <div key={review._id} className="card w-96 bg-secondary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{review.serviceName}</h2>
                            <p>{review.name}</p>
                            <p>{review.email}</p>
                            <p>{review.text}</p>
                            <p>Review: {review?.review}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleUpdate(review._id)} className="btn btn-active btn-primary">Edit</button>
                                <button onClick={() => handleDelete(review._id)} className="btn btn-active btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>) :
                    <div>
                        <h1 className=' text-yellow-500 font-bold text-3xl'>No reviews were added</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyReviews;