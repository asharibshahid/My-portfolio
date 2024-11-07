"use client";
import React, { useState } from 'react';
// Temporary type casting to 'any'
import { Link as ScrollLink } from 'react-scroll';
 // Import react-scroll Link for smooth scrolling
import Link from 'next/link'; // Import Next.js Link for page navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-500 to-emerald-900 p-5 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">My Portfolio</Link> {/* Use Next.js Link for homepage */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {/* Smooth Scroll for same-page sections */}
          <li>
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">
              Home
            </ScrollLink>
          </li>
          {/* Use Next.js Link for page navigation */}
          <li>
            <Link href="/about" className="cursor-pointer hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="cursor-pointer hover:text-gray-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="cursor-pointer hover:text-gray-200">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="cursor-pointer hover:text-gray-200">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-green-200 to-green-800">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {/* Same-page smooth scrolling */}
              <li>
                <ScrollLink to="home" href="/" smooth={true} duration={500} className="text-white text-lg cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  Home
                </ScrollLink>
              </li>
              {/* External page navigation */}
              <li>
                <Link href="/about" className="text-white text-lg cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white text-lg cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-white text-lg cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-lg cursor-pointer hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

