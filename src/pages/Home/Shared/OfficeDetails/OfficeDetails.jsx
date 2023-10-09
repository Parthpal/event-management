import React from 'react';
import { BiMap, BiSolidContact, BiSolidGroup, BiTimeFive} from "react-icons/bi";

const OfficeDetails = () => {
  return (
    <div>
        <div data-aos="flip-up" className=' my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           <div  className='mx-auto mb-4 shadow-2xl text-center space-y-3 w-60 h-60 p-5 border-2 border-yellow-100 rounded-3xl bg-yellow-100'>
                <span className='text-3xl flex justify-center text-[#FF635C] mb-3'><BiMap></BiMap></span>
                <h3 className='text-xl font-semibold' >Address</h3>
                <p className='font-medium text-sm'>phEventAgency</p>
                <p className='font-medium'>85/A Longside Road</p>
                <p className='font-medium'>C.A USA</p>
           </div>
           <div className='mx-auto mb-4 shadow-2xl text-center space-y-3 w-60 h-60 p-5 border-2 border-yellow-100 rounded-3xl bg-yellow-100'>
                <span className='text-3xl flex justify-center text-[#FF635C] mb-3'><BiSolidContact></BiSolidContact></span>
                <h3 className='text-xl font-semibold' >Phone & E-mail</h3>
                <p className='font-medium text-sm'>Phone: 1-800-64-38</p>
                <p className='font-medium text-sm'>Fax: 1-800-64-39</p>
                <p className='font-medium text-sm'>office@pheventagncy.com</p>
           </div>
           <div className=' mx-auto mb-4 shadow-xl text-center space-y-3 w-60 h-60 p-5 border-2 border-yellow-100 rounded-3xl bg-yellow-100'>
                <span className='text-3xl flex justify-center text-[#FF635C] mb-3'><BiTimeFive></BiTimeFive></span>
                <h3 className='text-xl font-semibold' >Open Hours</h3>
                <p className='font-medium text-sm'>Monday – Friday</p>
                <p className='font-medium text-sm'>8.00 am – 5.00 pm</p>
                <p className='font-medium text-sm'>Weekend Closed</p>
           </div>
           <div className='mx-auto mb-4 shadow-2xl text-center space-y-3 w-60 h-60 p-5 border-2 border-yellow-100 rounded-3xl bg-yellow-100'>
                <span className='text-3xl flex justify-center text-[#FF635C] mb-3'><BiSolidGroup></BiSolidGroup></span>
                <h3 className='text-xl font-semibold' >Sessions</h3>
                <p className='font-medium text-sm'>Mornings, 8 am – 12 noon</p>
                <p className='font-medium text-sm'>Afternoons, 1 pm – 5 pm</p>
                <p className='font-medium text-sm'>Full Day, 8 am – 5 pm</p>
           </div>
        </div>
    </div>
  );
};

export default OfficeDetails;