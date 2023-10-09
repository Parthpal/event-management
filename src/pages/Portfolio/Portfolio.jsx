import React from 'react';
import Header from '../Home/Shared/Header/Header';

const Portfolio = () => {
    return (
        <div>
            <Header/>
            <h2 className='text-4xl text-[#FF655C] font-semibold text-center mt-10'>Our Portfoilio</h2>

             <div data-aos='fade-in' className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-5'> 
                <img data-aos='fade-in' className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/0DqVv8C/gallery-1.jpg" alt="" srcset="" />
                <img data-aos='fade-in' className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/S75cv3d/gallery-2.jpg" alt="" srcset="" />
                <img data-aos='fade-in' className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/qWtKBrP/gallery-3.jpg" alt="" srcset="" />
                <img data-aos='fade-in'  className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/mqwT5zG/gallery-4.jpg" alt="" srcset="" />
                <img data-aos='fade-in'  className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/8XR4x0z/gallery-5.jpg" alt="" srcset="" />
                <img data-aos='fade-in'  className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/fQgVb0C/gallery-6.jpg" alt="" srcset="" />
                <img data-aos='fade-in'  className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/QrcLKG1/gallery-7.jpg" alt="" srcset="" />
                <img data-aos='fade-in'  className='w-96 h-96 mx-auto my-5 border-2 border-yellow-500' src="https://i.ibb.co/Fs4r4jk/gallery-8.jpg" alt="" srcset="" />

             
                
            </div>   

        </div>
    );
};

export default Portfolio;