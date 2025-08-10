import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = ({ className = '' }) => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className={`bg-[#F5F5F3] py-4 ${className}`}>
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative">
                    
                    {/* Toggle Icon */}
                    <div className="relative w-6 h-6 cursor-pointer" onClick={() => setMenu(!menu)}>
                        <FaBarsStaggered
                            className={`absolute inset-0 transition-all duration-300 ease-in-out ${menu ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                        />
                        <GiCrossedSwords
                            className={`absolute inset-0 transition-all duration-300 ease-in-out ${menu ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                        />
                    </div>

                    <h3 className="font-medium">Shop by Category</h3>

                    {/* Middle Section */}
                    <div className="flex-[3] w-full md:w-auto">
                        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                            <input placeholder=' Search ' type="text" />
                           
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-[1] flex justify-end w-full md:w-auto">
                        <button className="bg-black text-white px-4 py-2 rounded-md">
                            Sign In
                        </button>
                    </div>

                    {/* Submenu */}
                    <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}
                        style={{ zIndex: 10 }}
                    >
                        <ul className="flex flex-col">
                            {['Accesories', 'Furniture', 'Electronics', 'Clothes', 'Bags', 'Home appliance'].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
