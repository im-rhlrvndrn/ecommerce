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
                <Product
                    id='1'
                    title='Hooked: How to Build Habit-Forming'
                    price={499}
                    img='https://images-na.ssl-images-amazon.com/images/I/41NbRv8byAL._SX329_BO1,204,203,200_.jpg'
                    rating={5}
                />
                <Product
                    id='2'
                    title='Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance'
                    price={2999}
                    img='https://images-na.ssl-images-amazon.com/images/I/61IuteksVXL._SX522_.jpg'
                    rating={5}
                />
            </div>
            <div className='home__products'>
                <Product
                    id='3'
                    title='Amazon alexa'
                    price={2999}
                    img='https://rentsher-india.s3.ap-south-1.amazonaws.com/images/products/10423/amazon-alexa_12101.jpg'
                    rating={5}
                />
                <Product
                    id='4'
                    title='OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)'
                    price={39999}
                    img='https://images-na.ssl-images-amazon.com/images/I/71KJ3loLvyL._SX679_.jpg'
                    rating={5}
                />
                <Product
                    id='5'
                    title='Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance'
                    price={2999}
                    img='https://images-na.ssl-images-amazon.com/images/I/61IuteksVXL._SX522_.jpg'
                    rating={5}
                />
            </div>
            <div className='home__products'>
                <Product
                    id='6'
                    title='Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance'
                    price={2999}
                    img='https://images-na.ssl-images-amazon.com/images/I/61IuteksVXL._SX522_.jpg'
                    rating={5}
                />
            </div>
        </div>
    );
};

export default Home;
