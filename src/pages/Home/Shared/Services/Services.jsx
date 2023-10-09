import React, { useEffect, useState } from 'react';
import ServicesDisplay from './ServicesDisplay/ServicesDisplay';

const Services = () => {

    const [events,setEvents]=useState([]);
    useEffect( ()=>{
        fetch('event.json')
        .then(response=>response.json())
        .then(data=>setEvents(data))
    },[])

    return (
        <div>
            <div data-aos="fade-right" className='bg-red-400 p-5 mt-10'>
                <h3 className='text-6xl text-center font-bold text-white'>Our Services</h3>
            </div>
            
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    {
                        events.map(aEvent=><ServicesDisplay events={aEvent}></ServicesDisplay>)
                    }
                </div>
        </div>
    );
};

export default Services;