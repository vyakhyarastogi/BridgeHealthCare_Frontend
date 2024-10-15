import React from 'react';
import Logo from '../asset/Logo.png'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between px-6  shadow-md bg-white">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-30  mr-4" />
                {/* <span className="text-xl font-bold text-gray-800">
                    Bridge Healthcare Private Limited
                </span> */}
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-green font-medium hover:underline">
                    Home
                </a>
                <a href="#" className="text-gray-700 hover:underline">
                    About Us
                </a>
                <a href="#" className="text-gray-700 hover:underline">
                    Homecare
                </a>
                <a href="#" className="text-gray-700 hover:underline">
                    Product
                </a>
                <a href="#" className="text-gray-700 hover:underline">
                    Demo
                </a>
                <a href="#" className="text-gray-700 hover:underline">
                    Contact Us
                </a>
            </div>
            <a href="#" className="px-4 py-2 border-2 border-green-700 text-green-700 font-medium rounded-md hover:bg-green hover:text-white transition">
                Contact Us
            </a>
        </nav>
    );
};

export default Nav;
