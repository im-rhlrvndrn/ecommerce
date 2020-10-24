import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { db } from '../../firebase';

// scss files
import './Orders.scss';

// React components
import OrderAccordion from '../../components/OrderAccordion/OrderAccordion';

const Orders = () => {
    const [{ cart, user }, dispatch] = useDataLayerValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        user
            ? db
                  .collection('users')
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
                  )
            : setOrders([]);
    }, [user]);

    return (
        <div className='orders'>
            <h1>Your orders</h1>
            {orders?.map((order) => (
                <OrderAccordion order={order} />
            ))}
        </div>
    );
};

export default Orders;
