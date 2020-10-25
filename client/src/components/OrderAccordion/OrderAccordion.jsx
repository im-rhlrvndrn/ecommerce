import React, { useState, useRef, useEffect } from 'react';
import { gsap, css } from 'gsap';
import moment from 'moment';

// SCSS
import './OrderAccordion.scss';

// ! Rewrite the animations of this component with GSAP
const Accordion = ({ order }) => {
    const [active, setActive] = useState(false);
    const [contentHeight, setContentHeight] = useState('0px');
    const [rotate, setRotate] = useState('accordion__icon');
    const [opacity, setOpacity] = useState('0');

    const contentRef = useRef(null);
    const t1 = gsap.timeline({ paused: true, reversed: true });

    useEffect(() => {
        t1.to('.orderContainer', { duration: 0, css: { visibility: 'visible' } }).from(
            '.orderItemsContainer__orderItem',
            {
                duration: 0.4,
                stagger: 0.15,
                opacity: 0,
                y: '-10px',
                ease: 'power3.InOut',
            }
        );

        // active ? t1.play() : t1.reverse();
        t1.play();
    }, [active]);

    useEffect(() => {}, []);

    const handleAccordionToggle = () => {
        setActive(!active);
        setRotate(active ? 'accordion__icon rotateBack' : 'accordion__icon rotate');
        setOpacity(active ? '0' : '1');
    };

    return (
        <div className='orderContainer' onClick={handleAccordionToggle}>
            <div className='orderContainer__title'>
                <h3>Order details</h3>
                <Chevron className={`${rotate}`} height={40} width={40} />
            </div>
            <div className='orderContainer__info'>
                <div className='orderContainer__info__date'>
                    {moment.unix(order?.data?.created).format('MMM Do')}
                </div>
                <div className='orderContainer__info__subtotal'>
                    {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    }).format(order?.data?.amount / 100)}
                    <p>{order?.data?.cart?.length} items</p>
                </div>
            </div>
            {/* The below div is the expandable box */}
            {active && (
                <div ref={contentRef} className='orderItemsContainer'>
                    {order.data.cart?.map((item) => (
                        <div className='orderItemsContainer__orderItem'>
                            <img src={item.img} alt={item.title} />
                            <p className='orderItemsContainer__orderItem__title'>{item.title}</p>
                            <p className='orderItemsContainer__orderItem__price'>
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR',
                                }).format(item?.price)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Chevron = ({ className, width, height, fill }) => {
    return (
        <svg
            className={className || ''}
            xmlns='http://www.w3.org/2000/svg'
            height={height || '24'}
            viewBox='0 0 24 24'
            width={width || '24'}
            style={{ cursor: 'pointer' }}
            fill={fill || '#000'}
        >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
        </svg>
    );
};

export default Accordion;
