import React, { useState } from 'react';
import logo from "../assets/OREBI©.png";
import Container from './Container';
import { FaBars } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className='max-w-[1280px] mx-auto'>
            <Container className='lg:grid grid-cols-3 mt-6  relative'>

                {/* Logo */}
                <div className='mb-3'>
                    <img src={logo} alt="OREBI Logo" />
                </div>

                {/* Navigation Menu */}
                <div>
                    <ul
                        className={`
              gap-16 lg:flex flex-col lg:flex-row duration-200 ease-in-out transition-all bg-gray-300 p-3 rounded-xl absolute top-[60px] left-0 right-0 z-50
              ${menu ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"} lg:opacity-100 lg:scale-100 lg:visible lg:static lg:p-0 lg:bg-transparent
            `}
                    >
                        <li className='font-dm text-[16px] hover:font-bold duration-300 ease-in-out text-[#767676] hover:text-black transition-colors cursor-pointer'>Home</li>
                        <li className='text-[#767676] hover:font-bold hover:text-black transition-colors cursor-pointer'>Shop</li>
                        <li className='text-[#767676] hover:font-bold hover:text-black transition-colors cursor-pointer'>About</li>
                        <li className='text-[#767676] hover:font-bold hover:text-black transition-colors cursor-pointer'>Contacts</li>
                        <li className='text-[#767676] hover:font-bold hover:text-black transition-colors cursor-pointer'>Journal</li>
                    </ul>
                </div>

                {/* Hamburger / Close Icon */}
                <div
                    className={`lg:hidden absolute top-[0px] right-[60px] transition-transform duration-300 ease-in-out cursor-pointer
            ${menu ? 'rotate-90' : 'rotate-0'}
          `}
                    onClick={() => setMenu(!menu)}
                >
                    {menu ? <GiTireIronCross size={24} /> : <FaBars size={24} />}
                </div>

            </Container>
        </header>
    );
};

export default Header;
