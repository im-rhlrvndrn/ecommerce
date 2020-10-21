import React from 'react';

// scss files
import './Product.scss';

import HeroImage from '../../assets/heroimage.jpg';

const Product = () => {
    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__info__title'>The Lean Startup</p>
                <p className='product__info__price'>
                    <span className='product__info__price__currency'>$</span>
                    <span>19.99</span>
                </p>
                <div className='product__rating'></div>
            </div>
            <img className='product__image' src={HeroImage} alt='' />
            <div className='product__cta'>Add to cart</div>
        </div>
    );
};

export default Product;
