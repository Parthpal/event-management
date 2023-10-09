import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Footer from '../pages/Home/Shared/Footer/Footer';
const Root = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
        });
      }, [])
    return (
        <div className='font-montserrat'>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;