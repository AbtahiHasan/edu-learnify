import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const TopNav = () => {
    return (
        <section className='bg-green-700 py-3'>
            <div className='ui-container text-white flex flex-col md:flex-row md:justify-between items-center font-bold'>
                <div className="flex gap-5">
                    <p className="flex gap-2 items-center"> <BsFillTelephoneFill/> <span> +98 558 547 589 </span></p>
                    <p className="flex gap-2 items-center"> <TfiEmail/> <span> mail@edu-learnify.com </span></p>
                </div>
                <div className="flex gap-3">
                    <NavLink className="divide-x divide-solid">Login</NavLink> <span>|</span>
                    <NavLink>Register</NavLink>
                </div>
            </div>
        </section>
    );
};

export default TopNav;