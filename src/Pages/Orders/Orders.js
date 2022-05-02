import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        // async diye data load/get
        const getOrders = async () => {
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();

        // fetch diye data get/load
        // fetch(url, {
        //     method: 'GET'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setOrders(data)
        //     })
    }, [])
    return (
        <div>
            <h2>Your Orders: {orders.length} </h2>
        </div>
    );
};

export default Orders;