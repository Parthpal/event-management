import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

    return (
        <div>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4500}
                >
                        {/* slider 1 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/3S4Q8b5/awedding-slider-1.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-yellow-300">We'll make your wedding dreams come true</h1>
                                        <p className="text-white font-semibold mt-5">Planning a wedding is not easy in your busy city </p>
                                        <p className="text-white font-semibold">It takes skills to make it all look easy going </p>
                                        
                                    </div>
                                </div>
                        </div>
                        {/* slider 2 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/PQCH1ht/abirthday-slider-2.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-yellow-300">Birthday parties that are as unique as you are.</h1>
                                        <p className="text-white font-semibold mt-5">We create unforgettable birthday experiences </p>
                                        <p className="text-white font-semibold"> tailored to your unique vision and budget </p>
                                        
                                    </div>
                                </div>
                        </div>
                        {/* slider 3 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/QYgkNhX/ababy-shower-slider.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-yellow-300">Celebrating the miracle of new life</h1>
                                        <p className="text-white font-semibold mt-5">We plan and coordinate baby showers</p>
                                        <p className="text-white font-semibold"> You can focus on celebrating your new arrival </p>
                                    
                                    </div>
                                </div>
                        </div>
                        {/* slider 4 */}
                        <div className="hero h-full" style={{backgroundImage: 'url("https://i.ibb.co/6FZKJgT/aanniversary-slider-4.jpg")',backgroundSize: 'cover'}}>
                            <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="text-4xl font-bold text-yellow-300">Celebrating milestones, making memories</h1>
                                        <p className="text-white font-semibold mt-5">We create personalized anniversary events</p>
                                        <p className="text-white font-semibold"> celebrate your unique love story </p>
                                    
                                    </div>
                                </div>
                        </div>

                </AutoplaySlider>
                
        </div>
    );
};

export default Banner;