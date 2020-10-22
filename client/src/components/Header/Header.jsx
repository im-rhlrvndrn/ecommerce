import React from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';
import SearchIcon from '@material-ui/icons/Search';

// scss files
import './Header.scss';

// images
import ShoppingCartIcon from '../../assets/shopping-cart.svg';

const Header = () => {
    const [{ cart }, dispatch] = useDataLayerValue();

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
                <Link to='/checkout'>
                    <div className='header__options__optionItem cartOption'>
                        <img className='basketIcon' src={ShoppingCartIcon} alt='' />
                        <span>({cart.length})</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
