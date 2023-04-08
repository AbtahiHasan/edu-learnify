import React from 'react';
import { Link } from 'react-router-dom';
import { MdSlowMotionVideo } from "react-icons/md";


const AboutSection = () => {
    return (
        <section className='bg-white relative z-[100] pt-60'>
            <div className='ui-container grid md:grid-cols-2 gap-5'>
                <div className='mt-[350px] md:mt-auto'>
                    <h2 className='text-3xl relative before:content-[""] before:w-[2px] before:h-full  before:absolute before:bg-cyan-500 before:-left-3 '>About <span className='text-sky-800'>Us</span></h2>
                    <p className='mt-4'>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> 
                    <p className='mt-10'>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven iam, quis nostrud exer citation ullamco laboris nisi ut perspiciatis unde omnis iste natus error sit voluptate.
                    </p>
                    <button className="btn-about mt-5"><Link>About Us</Link></button>
                </div>
                <div >
                    <div className='w-full md:w-[80%] max-h-[600px] relative mx-auto'>
                        <img className='w-full h-full' src="https://htmldemo.net/glaxdu/glaxdu/assets/img/banner/banner-1.jpg" alt="video" />
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
                        <MdSlowMotionVideo className='text-6xl cursor-pointer '/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    );
};
export default AboutSection