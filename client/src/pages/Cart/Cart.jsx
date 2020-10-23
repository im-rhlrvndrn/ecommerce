import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { getCartSubtotal } from '../../reducer';

// Scss files
import './Cart.scss';

// React components
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    const [{ cart }, dispatch] = useDataLayerValue();

    return (
        <div className='cart'>
            <div className='cart__left'>
                <img
                    src='https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg'
                    alt='advertisement'
                />
                <div className='cartContainer'>
                    <h1 className='cartContainer__headline'>Your shopping cart</h1>
                    {/* CartItem */}
                    <div className='cartItemsContainer'>
                        {cart.length > 0 ? (
                            cart.map((cartItem) => (
                                <CartItem
                                    key={cartItem.id}
                                    id={cartItem.id}
                                    title={cartItem.title}
                                    price={cartItem.price}
                                    img={cartItem.img}
                                    rating={cartItem.rating}
                                />
                            ))
                        ) : (
                            <p style={{ margin: '2rem', textAlign: 'center' }}>
                                No item in your cart
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className='cart__right'>
                <div className='subtotal'>
                    <p className='subtotal__total'>
                        Subtotal:{' '}
                        <span>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumSignificantDigits: 2,
                            }).format(getCartSubtotal(cart))}
                        </span>
                    </p>
                    <span className='subtotal__gift'>
                        <input type='checkbox' id='gift' />{' '}
                        <label htmlFor='gift'>This cart contains a gift</label>
                    </span>
                    <button className='subtotal__cta'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
