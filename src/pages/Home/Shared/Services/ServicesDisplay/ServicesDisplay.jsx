import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDisplay = ({events}) => {
    const {id,name,image,price,description}=events;
    return (
        <div data-aos="fade-in" className="hero min-h-screen mb-10 lg:mb-0" style={{backgroundImage: `url(${image})`}}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content border-2 p-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-yellow-200 text-5xl font-bold">{name}</h1>
            <p className='text-xl text-center font-semibold text-white'>{description.slice(0,100)}...</p>
            <p className='text-xl text-center font-bold text-yellow-200  mt-5 pb-2 border-b-2'>Offers Start from ${price}</p>
                <Link className="btn border-2 btn-outline text-yellow-200 mt-10" to={`/service/${id}`}>
                          More Details
                </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesDisplay;