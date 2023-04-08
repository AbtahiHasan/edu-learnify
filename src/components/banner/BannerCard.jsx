import React from 'react';
import { SiGooglescholar } from "react-icons/si";


const BannerCard = () => {
    return (
        <section className='ui-container z-[111] grid md:grid-cols-4 md:gap-5 absolute -bottom-[500px] md:-bottom-24 left-0 right-0'>
            <article className='flex gap-3 bg-[#2280cf] p-5 text-white'>
                <SiGooglescholar className='text-7xl'/>
                <div>
                    <h2 className='text-2xl font-bold '>Scholarship Facility</h2>
                    <p className='mt-3'>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.</p>
                </div>               
            </article>
            <article className='flex gap-3 bg-[#1a6723] p-5 text-white'>
                <SiGooglescholar className='text-7xl'/>
                <div>
                    <h2 className='text-2xl font-bold '>Scholarship Facility</h2>
                    <p className='mt-3'>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.</p>
                </div>               
            </article>
            <article className='flex gap-3 bg-[#1c59c2] p-5 text-white'>
                <SiGooglescholar className='text-7xl'/>
                <div>
                    <h2 className='text-2xl font-bold '>Scholarship Facility</h2>
                    <p className='mt-3'>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.</p>
                </div>               
            </article>
            <article className='flex gap-3 bg-[#c0a115] p-5 text-white'>
                <SiGooglescholar className='text-7xl'/>
                <div>
                    <h2 className='text-2xl font-bold '>Scholarship Facility</h2>
                    <p className='mt-3'>magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.</p>
                </div>               
            </article>
        </section>
    );
};

export default BannerCard;