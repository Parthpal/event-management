import React from 'react';
import Header from '../Home/Shared/Header/Header';

const LoveNotes = () => {
    return (<>
        <Header/>
        <div>
            <h3 className='text-4xl text-[#FF655C] font-semibold text-center mt-10'>Love Notes From Our Clients</h3>
        </div>
        <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 mt-10'>
                <div data-aos='fade-in' className='border-2 border-yellow-500 p-5 w-96 mx-auto my-5 '>
                    <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/0DqVv8C/gallery-1.jpg" alt="" srcset="" />
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">We wanted to take a moment to express our sincere gratitude for your amazing work on our wedding day. From the very beginning, you were incredibly supportive and helpful. You listened to our vision for our day and helped us to bring it to life in every detail.<span className='text-yellow-600'> -Austin & Semar</span></p>
                </div>
                <div data-aos='fade-in' className='border-2 border-yellow-500 w-96 p-5 mx-auto my-5'>
                    <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/qWtKBrP/gallery-3.jpg" alt="" srcset="" />  
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Especially impressed by your professionalism and attention to detail. You were always on top of things and made sure that everything ran smoothly on the day of our wedding. We didn't have to worry about a thing, which allowed us to relax and enjoy our special day.<span className='text-yellow-600'> -Rozer & Sileon</span></p>
                </div>
                <div data-aos='fade-in' className='border-2 border-yellow-500 w-96 p-5 mx-auto my-5'>
                    <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/mqwT5zG/gallery-4.jpg" alt="" srcset="" />
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">You were absolutely amazing on our wedding day! You made everything so easy and stress-free for us, and you made sure that everything was perfect.<span className='text-yellow-600'> -Simon</span></p>
                </div>
                <div data-aos='fade-in' className='border-2 border-yellow-500 w-96 p-5 mx-auto my-5 '>
                     <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/8XR4x0z/gallery-5.jpg" alt="" srcset="" />                   
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">At the day of the party was everything I had dreamed of. The venue looked amazing, the food was delicious, and the entertainment was top-notch. My guests had an amazing time, and I couldn't have been happier.<span className='text-yellow-600'> -Maxwell & Relanaroy</span></p>
                </div>
                <div data-aos='fade-in' className='border-2 border-yellow-500 w-96 p-5 mx-auto my-5'>
                    <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/fQgVb0C/gallery-6.jpg" alt="" srcset="" />
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">The party itself was everything I had hoped for and more. The decorations were adorable, the food was delicious, and the activities were fun for everyone. My daughter had the time of her life, and I couldn't have been happier.<span className='text-yellow-600'> -Roy & Laxo</span></p>
                </div>
                <div data-aos='fade-in' className='border-2 border-yellow-500 w-96 p-5 mx-auto my-5'>
                    <img data-aos='fade-in' className='pb-5' src="https://i.ibb.co/Fs4r4jk/gallery-8.jpg" alt="" srcset="" />
                    <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">We also wanted to thank you for your incredible creativity and design skills. Our wedding venue looked absolutely stunning, and we received so many compliments from our guests. You went above and beyond to create a magical and unforgettable day for us.<span className='text-yellow-600'> -Annar & Salouny</span></p>
                </div>

        </div>

        </>);
};

export default LoveNotes;