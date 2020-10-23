import React from 'react';
import { useDataLayerValue } from '../../DataLayer';

// Scss files
import './CartItem.scss';

const CartItem = ({ id, title, img, price, rating }) => {
    const [{ cart }, dispatch] = useDataLayerValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            item: {
                id,
            },
        });
    };
    return (
        <div key={id} className='cartItem'>
            <img src={img} alt={title} />
            <div className='cartItem__info'>
                <p className='cartItem__info__title'>{title}</p>
                <p className='cartItem__info__price'>
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
                        price
                    )}
                </p>
                <div className='cartItem__info__ratings'>
                    {Array(rating)
                        .fill()
                        .map((rating) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromCart} className='amazon_full_button'>
                    Remove from cart
                </button>
            </div>
        </div>
    );
};

export default CartItem;
