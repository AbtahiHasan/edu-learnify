import logo from '/logo.svg'
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';




const MainNav = () => {
    const [toggle, setToggle] = useState(false)
    const navlinks = ["home", "about", "shop", "pages", "about us", "blog", "contact"]
    return (
        <section className='py-6 bg-white relative z-50'>
            <div className='ui-container flex items-center justify-between relative'>
                {/* logo  */}
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold'>Edu-Learnify</h2>
                </div>
               
                <ul className={`md:flex absolute transition-all md:static w-full md:w-auto gap-4 top-16 bg-black md:bg-transparent text-white md:text-black items-center ${toggle ? "left-0": "-left-full"} `}>
                    {
                        navlinks.map((name, index) => <li className='p-3 text-center' key={index}><NavLink>{name.toUpperCase()}</NavLink></li>)
                    }                  
                </ul>
                <div className='ml-auto'>
                    <button><AiOutlineShoppingCart className='font-bold text-xl mr-2'/></button>
                    <button><AiOutlineSearch className='font-bold text-xl mr-2'/></button>
                </div>
                <div className='md:hidden'>
                {
                    toggle ? <MdClose className='text-xl' onClick={() => setToggle(!toggle)}/> : <HiMenuAlt2 className='text-xl' onClick={() => setToggle(!toggle)}/>
                }
                </div>
            </div>
        </section>
    );
};

export default MainNav;