import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
                {isOpen ? <RiCloseLine size={30} /> : <RiMenu4Line size={30} />}
            </button>

            {/* Menu Links */}
            <div className={`absolute text-xl top-14   z-50 ${isOpen ? 'flex flex-col bg-[#0f0f0f] -right-4 px-52 py-5' : 'hidden'} md:flex md:flex-row md:static md:w-auto md:gap-6`}>
                {['/', '/menu', '/about', '/booking', '/contact',   ].map((path) => (
                    <Link href={path} key={path} className="no-underline font-bold font-pirata-one mb-2 tracking-widest relative group">
                        {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                        {/* Two Underlines Effect */}
                        <span className="absolute left-0 bottom-0 top-[120%] w-0 h-[2px] bg-[#ffdc7c] group-hover:w-full transition-all duration-300"></span>
                        <span className="absolute left-0 top-[100%] bottom-[4px] w-0 h-[2px] bg-[#ffdc7c] group-hover:w-full transition-all duration-300 delay-150"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
