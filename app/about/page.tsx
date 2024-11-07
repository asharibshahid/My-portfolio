"use client"
import React from 'react';
import Image from 'next/image';
import Pic from '@/app/Components/Images/Pic.png'; // Static import
import Typewritter from "typewriter-effect"
const About = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r  from-green-500 to-emerald-900 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={Pic} // Use the static import
            width={500} // Set the appropriate width
            height={500} // Set the appropriate height
          />
          <br />
          <div className='bg-green-900 text-white text-center shadow-lg rounded-lg overflow-hidden'>
            
          <Typewritter
  options={{
    strings: ['Web Developer', 'Ui/UX Designer', 'Frontend Developer' ,'Prompt Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
       
        </div>
      
       
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed text-slate-800">
          <h1 className=' text-black text-center'> Hi , Im  Asharib Shahid</h1>
            <br />
            A Web Developer, UI/UX Designer, and Frontend Developer with a passion for creating seamless user experiences. With a strong foundation in web development, I specialize in building responsive and visually appealing interfaces that blend functionality and design. My expertise in UI/UX design allows me to craft intuitive layouts that enhance user interactions, while my proficiency in frontend technologies ensures clean and efficient code. As a Prompt Engineer, I'm also exploring the intersection of AI and design, driving innovation with smart, conversational tools. Let's build something great together!
            <br />
            <div className='text-slate-50'>
            <h2>Hafiz Al Quran</h2>
            <h2>Age : 16</h2>
            <h2>10th Matric</h2>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About ;