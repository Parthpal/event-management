import React, { useEffect } from 'react';
import { FaHandsHelping } from "react-icons/fa";
import { BsFillChatRightTextFill,BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidParty } from "react-icons/bi";


const Advertise = () => {

    return (
        <div  className='mt-10 text-center px-10 md:px-24'>
            <h1 data-aos="fade-right" className='text-4xl font-bold pt-16 pb-10'> <span className='text-yellow-400'> Hello! </span>We Are an Event Planning Agency</h1>
            <p data-aos="fade-right" className='text-xl font-semibold'>As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?”</p>
        <div data-aos="fade-left" className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 text-center text-xl pt-16'>
                <div>
                    <span className='text-3xl flex justify-center text-[#FF635C]'><BsFillBuildingsFill></BsFillBuildingsFill></span>  
                    <p className='pt-5'>Find the perfect venue for free</p>
                    </div>
                <div>
                    <span className='text-3xl flex justify-center text-[#FF635C]'><BsFillChatRightTextFill></BsFillChatRightTextFill></span>
                    <p className='pt-5'>Connect with the best vendor</p>
                </div>
                <div>
                    <span className='text-3xl flex justify-center text-[#FF635C]'><FaHandsHelping></FaHandsHelping></span>
                    <p className='pt-5'>Let us help you with the event</p>
                </div>
                <div>
                    <span className='text-3xl flex justify-center text-[#FF635C]'><BiSolidParty></BiSolidParty></span>
                    <p className='pt-5'>Enjoy the party with your friends</p>
                </div>
        </div>
       
       
        </div>
    );
};

export default Advertise;