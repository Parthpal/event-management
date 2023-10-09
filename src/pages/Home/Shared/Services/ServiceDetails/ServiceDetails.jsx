import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Header/Header';

const ServiceDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const selectedService=data.find(serviceData=>serviceData.id==id);
    return (<>
    <Header/>
        <div>
            <div className="hero" style={{backgroundImage: `url(${selectedService.image})`,height:'550px',backgroundPosition:'center top' ,backgroundRepeat:'no-repeat'}}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-yellow-200">{selectedService.name}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-24 mx-64'>
                  <p className='mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>{selectedService.description}</p>
            <div className='w-full py-3 bg-red-400' >

                <h2 className='text-3xl text-center font-bold text-white' >${selectedService.price}/Per {selectedService.name}</h2>

            </div>
            </div>
            
            
        </div>
    </>);
};

export default ServiceDetails;