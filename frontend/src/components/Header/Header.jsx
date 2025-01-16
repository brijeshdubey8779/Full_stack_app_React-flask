import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    // State to toggle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* A simple navigation bar containing Home, About, Login, Register, etc. */}
            <nav className="bg-gray-400 shadow-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                            <NavLink to="#" className="text-2xl font-semibold text-gray-900">
                                Navbar
                            </NavLink>
                        </div>
                        <div className="sm:flex hidden items-center space-x-4">
                            <NavLink to="/" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200`}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200`}>
                                About
                            </NavLink>
                            <NavLink to="/login" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200`}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200`}>
                                Register
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200`}>
                                Contact
                            </NavLink>

                            {/* Search Bar inside the navbar */}
                            <form className="flex items-center">
                                <input
                                    className="form-input rounded-md border-gray-300 p-2 w-50"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink to="/" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200`}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200`}>
                        About
                    </NavLink>
                    <NavLink to="/login" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200`}>
                        Login
                    </NavLink>
                    <NavLink to="/register" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200`}>
                        Register
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200`}>
                        Contact
                    </NavLink>
                    <form className="flex items-center">
                        <input
                            className="form-input rounded-md border-gray-300 p-2 w-50"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
