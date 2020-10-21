import React from 'react';
import Product from '../../components/Product/Product';

// scss files
import './Home.scss';

// images
import HeroImage from '../../assets/heroimage.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    src={
                        'https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-10e59f68-6ffb-4358-ba3d-e7ad977f2bb5._CB428109203_.jpg' ||
                        HeroImage
                    }
                    alt=''
                />
            </div>
            <div className='home__products'>
                <Product />
            </div>
        </div>
    );
};

export default Home;
