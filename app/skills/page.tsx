import React from 'react';
import Image from 'next/image';
import th from '@/app/Components/Images/th.jpg'; // Example path to HTML icon
import tha from '@/app/Components/Images/tha.jpg'; // Example path to CSS icon
import thc from '@/app/Components/Images/thc.jpg'; // Example path to JavaScript icon
import thb from '@/app/Components/Images/thb.jpg'; // Example path to Next.js icon
import thd from '@/app/Components/Images/thd.jpg'; // Example path to React icon
import the from '@/app/Components/Images/the.jpg'; // Example path to TypeScript icon

const Skills = () => {
  // Helper function to render 5 golden stars for each skill
  const renderStars = () => (
    <div className="flex justify-center mt-2">
      {Array(5).fill('').map((_, index) => (
        <svg
          key={index}
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="text-gray-400 body-font bg-gray-900 py-16">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl text-white font-medium mb-12 text-center">Skills</h1>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card for HTML */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={th}
                alt="HTML"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">HTML</h2>
              {renderStars()}
            </div>
          </div>

          {/* Card for CSS */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={tha}
                alt="CSS"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">CSS</h2>
              {renderStars()}
            </div>
          </div>

          {/* Card for JavaScript */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={thc}
                alt="JavaScript"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">JavaScript</h2>
              {renderStars()}
            </div>
          </div>

          {/* Card for Next.js */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={thb}
                alt="Next.js"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">Next.js</h2>
              {renderStars()}
            </div>
          </div>

          {/* Card for React.js */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={thd}
                alt="React.js"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">React.js</h2>
              {renderStars()}
            </div>
          </div>

          {/* Card for TypeScript */}
          <div className="border-2 border-gray-800 bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center">
              <Image 
                src={the}
                alt="TypeScript"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-lg text-white font-medium">TypeScript</h2>
              {renderStars()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
