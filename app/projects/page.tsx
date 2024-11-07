"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Screenshot from '@/app/Components/Images/Screenshot (14).png';

const Projects = () => {
  return (
  
    <section className="text-gray-400 body-font bg-green-900">
         <h1 className="text-3xl text-white font-medium mb-12 text-center">Projects</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
      
          {/* Card 1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 bg-green-950 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Projects
                </h2>
                <Image 
                  src={Screenshot}
                  alt="Project Screenshot"
                  width={500}
                  height={300}
                  className="object-cover object-center"
                />
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Portfolio
                </h1>
                <p className="leading-relaxed mb-3 text-gray-300">
                  My previous portfolio site was a great learning journey, showcasing my early work in UI/UX design and frontend development.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href={"https://port-app-swart.vercel.app/"} target="_blank">
                    <h3 className="text-blue-500">Visit Site</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 bg-green-950 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Projects
                </h2>
                <Image 
                  src={require("@/app/Components/Images/Screenshot (11).png")}
                  alt="Todo List Screenshot"
                  width={500}
                  height={300}
                  className="object-cover object-center"
                />
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Todo List
                </h1>
                <p className="leading-relaxed mb-3 text-gray-300">
                  A simple and intuitive Todo List application designed to help users stay organized and productive.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href={"tinyurl.com/ashu-shk"} target="_blank">
                    <h3 className="text-blue-500">Visit Site</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 bg-green-950 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Projects
                </h2>
                <Image 
                  src={require("@/app/Components/Images/Screenshot 2024-10-05 at 12-23-30 i - Validate.png")}
                  alt="Email Validator Screenshot"
                  width={500}
                  height={300}
                  className="object-cover object-center"
                />
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Email Validator
                </h1>
                <p className="leading-relaxed mb-3 text-gray-300">
                  The Email Validator project was designed to provide a simple and effective solution for verifying the validity of email addresses in real-time.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href={"https://email-validator-w-eb-814b.vercel.app/"} target="_blank">
                    <h3 className="text-blue-500">Visit Site</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
