import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='relative'>
            <div className='before:content-[""] before:absolute before:blur-sm before:top-0 before:bottom-0 before:left-0 before:right-0 before:backdrop-blur-xl before:z-0 before:bg-cover before:bg-[url("https://htmldemo.net/glaxdu/glaxdu/assets/img/slider/slider-1.jpg")]  bg-cover  w-full h-screen'></div>
            <div className='absolute top-0 left-0 right-0 bottom-0 ui-container text-white flex flex-col justify-center'>
                <div className='w-1/2'>
                    <h1 className='text-5xl font-bold'>Learn New</h1>
                    <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, assumenda alias neque cum illum ipsam repellat totam at adipisci doloribus? Nostrum reiciendis placeat veniam expedita ducimus quae dolorum, provident voluptatem.</p>
                    <div className='flex gap-5 mt-10'>
                        <button className="btn-about"><Link>About Us</Link></button>
                        <button className="btn-contact"><Link>Contact Us</Link></button>
                    </div>
                </div>              
                
            </div>
            
        </section>
    );
};

export default Banner;