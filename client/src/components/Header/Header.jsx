import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

// scss files
import './Header.scss';

// images
import ShoppingCartIcon from '../../assets/shopping-cart.svg';

const Header = () => {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='ecommerce logo'
            />
            <div className='header__searchContainer'>
                <input
                    type='text'
                    name='headersearchbar'
                    id='headersearchbar'
                    placeholder='Search for products...'
                />
                <SearchIcon className='header__searchContainer__searchIcon' />
            </div>
            <div className='header__options'>
                <div className='header__options__optionItem'>
                    <span className='header__options__optionItem__subtitle'>hello, guest</span>
                    <span>Sign in</span>
                </div>
                <div className='header__options__optionItem'>
                    <span className='header__options__optionItem__subtitle'>hello, guest</span>
                    <span>Sign in</span>
                </div>
                <div className='header__options__optionItem'>
                    <span className='header__options__optionItem__subtitle'>hello, guest</span>
                    <span>Sign in</span>
                </div>
                <div className='header__options__optionItem'>
                    <img className='basketIcon' src={ShoppingCartIcon} alt='' />
                    <span>(0)</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
