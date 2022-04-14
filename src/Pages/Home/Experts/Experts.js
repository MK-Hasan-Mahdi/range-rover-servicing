import React from 'react';
import exprert1 from '../../../images/experts/expert-1.jpg'
import exprert2 from '../../../images/experts/expert-2.jpg'
import exprert3 from '../../../images/experts/expert-3.jpg'
import exprert4 from '../../../images/experts/expert-4.jpg'
import exprert5 from '../../../images/experts/expert-5.jpg'
import exprert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'George Bush', img: exprert1 },
        { id: 2, name: 'Obama', img: exprert2 },
        { id: 3, name: 'Abraham Lincon', img: exprert3 },
        { id: 4, name: 'Donald Trump', img: exprert4 },
        { id: 5, name: 'Joe Biden', img: exprert5 },
        { id: 6, name: 'Hillary Clinton', img: exprert6 },
    ]
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;