import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { db } from '../../firebase';

// scss files
import './Orders.scss';

const Orders = () => {
    const [{ cart, user }, dispatch] = useDataLayerValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>
                setOrders(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []);

    return <div className='orders'>Your orders</div>;
};

export default Orders;
