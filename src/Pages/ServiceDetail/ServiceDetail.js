import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Service Detail : {serviceId} </h2>
            <Link to='/checkout'><button className='btn btn-primary'>Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;