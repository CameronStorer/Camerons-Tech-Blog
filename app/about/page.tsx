"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

// Main App component for the portfolio
const App = () => {

  return (
    <div className="bg-black text-white font-sans antialiased">
      {/* --- Navigation Bar --- */}
      <header className="bg-black shadow-xl sticky top-0 z-60">
        {/* --- Navigation Bar --- */}
        <nav className="container grid m-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
          <div className="md:flex items-center">
            <a href="/#recent" className="font-bold text-gray-300 hover:bg-red-600 
            hover:text-gray-900 duration-200 py-5 md:py-5 px-4 md:px-7">Recent</a>
            <a href="/#popular" className="font-bold text-gray-300 hover:bg-red-600
            hover:text-gray-900 duration-200 py-5 md:py-5 px-4 md:px-7">Popular</a>
            <a href="/about" className="font-bold text-gray-300 hover:bg-red-600
            hover:text-gray-900 duration-200 py-5 md:py-5 px-4 md:px-7">About</a>
            <a href="/#contact" className="font-bold text-gray-300 hover:bg-red-600
            hover:text-gray-900 duration-200 py-5 md:py-5 px-4 md:px-7">Contact</a>
          </div>
        </nav>      
      </header>

      <main>
        {/* --- About Me Section --- */}
        <section id="about" className="pt-45 pb-15 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-red-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 mb-6">
                <Image src="/portrait.webp" className="rounded-full w-45 h-45 md:w-64
                md:h-64 object-cover border-4 border-gray-700 shadow-xl" alt="portrait"
                width={250} height={250}/>
              </div>
              <div className="flex-grow text-lg max-w-2xl">
                <p className="mb-4">
                  As a third-year Computer Science student at <a href="https://www.latech.edu/" target='blank'>Louisiana
                  Tech University</a>, I have a passion for technology
                  and am eager to expand my knowledge in the realm of Cybersecurity.
                </p><p className="mb-4">
                  Major-specific courses that I've completed include Data Structures, 
                  Systems Programming, and Operating Systems. Throughout my 
                  career, I have gained hands-on hardware, software, and cyber
                  security experience at companies such as Cameron LNG. Furthermore, I am 
                  proficient in the languages Python, Java, and C.
                </p><p>
                  Aside from programming, some of my hobbies include fishing,
                  jogging, and sketching.
                </p>
              </div>
            </div>
          </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://cameronstorer.com" className="bg-red-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors transform hover:scale-105">
                Portfolio
              </a>
              <a href="https://cameronstorer.com/#projects" className="border-2 border-gray-500 text-gray-200 font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105">
                View My Work
              </a>
            </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 bp-10 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-58 xxl:px-70">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              {['Python', 'Java', 'C#', 'HTML', 'Tailwind CSS', 'JavaScript', 
                'Bash Scripting', 'PowerShell Scripting', 'Git',
                'Microsoft Acitve Directory', 'Microsoft SCCM',
                ].map((skill, index) => (
                <div key={index} className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="text-gray-400 py-6 text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Cameron Storer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
