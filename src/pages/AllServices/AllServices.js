import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Card from '../Home/Card/Card';

const AllServices = () => {
    const allservices = useLoaderData()
    return (
        <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
                <Helmet><title>All Services</title></Helmet>
            {
                allservices.map(services => <Card btn={2} key={services._id} service={services}></Card>)
            }
        </div>
    );
};

export default AllServices;