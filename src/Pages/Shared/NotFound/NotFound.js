import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-info'>404</h1>
            <img className='mx-auto d-block w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;