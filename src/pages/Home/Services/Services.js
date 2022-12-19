import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {

    const [services,setServices] = useState([])
console.log(services)
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-5'>
            <h1 className='text-6xl text-center'>Ours Services</h1>
            <div>
                {
                    services.map(service =><Card service={service}></Card>)
                    
                }
            </div>
        </div>
    );
};

export default Services;