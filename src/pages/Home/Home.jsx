import React, { useEffect } from 'react';
import Header from './Shared/Header/Header';
import Banner from './Shared/Banner/Banner';
import Advertise from './Shared/Advertise/Advertise';
import Services from './Shared/Services/Services';
import Footer from './Shared/Footer/Footer';
import OfficeDetails from './Shared/OfficeDetails/OfficeDetails';

const Home = () => {

    return (
        <div>
            <Header/>
            <Banner/>
            <Advertise/>
            <Services/>
            <OfficeDetails/>
            
        </div>
    );
};

export default Home;