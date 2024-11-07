import React from 'react';

import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-900 py-12">
      <div className="container max-w-lg bg-teal-950 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We d love to hear from you! Please fill out the form below, and well get in touch as soon as possible.
        </p>

        <form  >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              id="name"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              id="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              id="message"
              placeholder="Your message here..."
             
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-700 text-white py-2 px-6 rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <h3 className="text-gray-700 font-medium mb-4">Follow us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/web_ghost.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 transition duration-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/asharib-shahid-73a3022b5/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 transition duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/asharibshahid" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 transition duration-300">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
