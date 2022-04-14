import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <p>Footer copyright @ {year}</p>
        </div>
    );
};

export default Footer;