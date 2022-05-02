import React from 'react';
import useServices from '../../hooks/useServices';

const ManagesServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you confirm to delete?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h3>Manage your services</h3>
            {
                services.map(service => <div key={service._id} className='d-flex'>
                    <h6>{service.name}</h6>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManagesServices;