import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Brand Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-lg font-bold text-gray-700">Onboarding Portal</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/home"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            Home
          </Link>
          <Link
            to="/help"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            Help
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
      </div>
    </header>
  );
};

export default Header;
