import logo from '/logo.svg'
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";


const MainNav = () => {
    const navlinks = ["home", "about", "shop", "pages", "about us", "blog", "contact"]
    return (
        <section className='mt-6 bg-white'>
            <div className='ui-container flex items-center justify-between'>
                {/* logo  */}
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="logo" />
                    <h2 className='text-2xl font-bold'>Edu-Learnify</h2>
                </div>
                <ul className='md:flex gap-4 items-center '>
                    {
                        navlinks.map((name, index) => <li key={index}><NavLink>{name.toUpperCase()}</NavLink></li>)
                    }
                    <li><button><AiOutlineShoppingCart className='font-bold text-xl'/></button></li>
                    <li><button><AiOutlineSearch className='font-bold text-xl'/></button></li>
                </ul>
            </div>
        </section>
    );
};

export default MainNav;