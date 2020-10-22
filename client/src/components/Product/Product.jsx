import React from 'react';

// scss files
import './Product.scss';

import HeroImage from '../../assets/heroimage.jpg';

const Product = ({ title, price, img, rating }) => {
    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__info__title'>
                    {title.length > 40 ? `${title.substring(0, 40)} ...` : title}
                </p>
                <p className='product__info__price'>
                    <span className='product__info__price__currency'>₹</span>
                    <span>{new Intl.NumberFormat().format(price)}</span>
                </p>
                <div className='product__info__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img className='product__image' src={img} alt={title} />
            <button className='product__cta'>Add to cart</button>
        </div>
    );
};

export default Product;
