import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Home/Card/Card';

const AllServices = () => {
    const allservices = useLoaderData()
    return (
        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
            {
                allservices.map(services => <Card service={services}></Card>)
            }
        </div>
    );
};

export default AllServices;