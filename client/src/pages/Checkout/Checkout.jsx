import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getCartSubtotal } from '../../reducer';
import { useDataLayerValue } from '../../DataLayer';
import { db } from '../../firebase';
import axios from '../../axios';

// scss files
import './Checkout.scss';

// React components
import CartItem from '../../components/CartItem/CartItem';

const Checkout = () => {
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [{ cart, user }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartSubtotal(cart) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //  paymentIntent = payment confirmation
                db.collection('users')
                    .doc(user?.uid)
                    .collections('orders')
                    .doc(paymentIntent.id)
                    .set({
                        cart: cart,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({ type: 'EMPTY_CART' });

                history.replace('/orders');
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    return (
        <div className='payment'>
            <h1>
                Checkout (<Link to='/cart'>{cart?.length} items</Link>)
            </h1>
            <div className='payment__section'>
                <h3 className='payment__section__title'>Delivery address</h3>
                <div className='payment__section__info'>
                    <p>Your email: {user?.email}</p>
                    <p>4B-201, Ramchandra Complex, subhash cross road,</p>
                    <p>Ganeshnagar, Dombivli west 421202</p>
                </div>
            </div>
            <div className='payment__section'>
                <h3 className='payment__section__title'>Review items</h3>
                <div className='payment__section__cartItemsContainer'>
                    {cart?.map((item) => (
                        <CartItem
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <h3 className='payment__section__title'>Payment method</h3>
                <div className='payment__section__details'>
                    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__section__details__paymentTotal'>
                            <h3>
                                Your order total:{'  '}
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR',
                                    maximumSignificantDigits: 2,
                                }).format(getCartSubtotal(cart))}
                            </h3>
                            <button
                                type='submit'
                                disabled={processing || disabled || succeeded}
                                className={
                                    disabled ? 'amazon_full_button_disabled' : 'amazon_full_button'
                                }
                            >
                                {processing ? 'Processing your payment' : 'Continue to Payment'}
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
