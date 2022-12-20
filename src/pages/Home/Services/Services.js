import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Services = () => {

    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 className='text-6xl text-center'>Ours Services</h1>
            <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)

                }
            </div>
            <div className=" text-center my-10">
                <Link to='/allservices'>
                    <button className=" btn btn-primary">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;