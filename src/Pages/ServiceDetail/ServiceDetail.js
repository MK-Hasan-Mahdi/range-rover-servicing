import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetails(serviceId);
    // console.log(service.name);
    return (
        <div>
            <h2>Service Detail : {service.name} </h2>
            <p>{service.description} </p>
            <p>{service.price} </p>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;