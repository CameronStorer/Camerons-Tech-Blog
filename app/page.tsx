"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

// Main App component for the portfolio
const App = () => {

  // List out projects
  const projects = [
    {
      title: 'My Homelab Tutorial',
      description: 'Read about how I self-host my own services \
      to stream music, host game servers, and store files in the cloud securely!',
      tech: ['#Homelab', '#Docker', '#Jellyfin', '#Nextcloud',],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">


      {/* --- WIP Warning --- */}
      <section className="py-1 pb-0 bg-red-800">
        <div className="container bg-red-800 m-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-1xl text-center m-0 text-black"> This site is still in development</h2>
        </div>
      </section>


      {/* --- Navigation Bar --- */}
      <div className="bg-gray-800 text-[2.625rem] md:text-4xl m-auto font-bold 
      font-serif text-red-500 py-2 mb-[-9] md:mb-[-12] text-center relative z-60"> 
      <a href="/">Cameron's Tech Blog</a></div>
      {/*<header className="bg-gray-800 shadow-xl sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5 grid items-center justify-center">
          {/* Desktop Navigation Links
          <div className="md:flex items-center border-teal-400 border-3 rounded-2xl">
            <a href="#about" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 rounded-full rounded-r-none py-1 md:py-0 px-4 md:px-7">About</a>
            <a href="#projects" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 px-4 md:px-7">Projects</a>
            <a href="#skills" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 px-4 md:px-7">Skills</a>
            <a href="#contact" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 rounded-full rounded-l-none px-4 md:px-7">Contact</a>
          </div>
        </nav>
      </header>*/}

      <main>
        {/* --- Welcome Section --- */}
        <section id="welcome" className="py-10 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-red-500">Welcome</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-grow text-lg max-w-2xl">
                <p className="mb-3 text-center">
                  This site holds articles written by a junior Louisiana Tech CS student and follows his interesets
                  in the areas of software development, homelabbing, and general cyber security.
                </p>
              </div>
            </div>
          </div>
            <div className="mt-1 flex justify-center space-x-4">
              <a href="https://cameronstorer.com" className="bg-red-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                Cameron's Portfolio
              </a>
            </div>
        </section>

        {/* --- Recent Articles  --- */}
        <section id="recent-articles" className="py-10 pb-10 bg-gray-800 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-38 2xl:px-68">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Recent Articles</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <a href="/pages/my-homelab-tutorial">{projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-xl p-6 transform transition-transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-red-500 text-sm font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* --- UNFINISHED ---
                  <div className="flex space-x-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                      <ArrowUpRight size={20} className="mr-2" />
                      Learn More
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  </div>*/}
                </div>
              ))}</a>
              </div>      
              {/* --- UNFINISHED --- 
              <div className="mt-10 flex justify-center">
                <a href="#projects" className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-400 transition-colors transform hover:scale-105">
                  See more
                </a> 
            </div> */}
          </div>
        </section>
        

        {/* --- Contact Section --- */}
        <section id="contact" className="py-10 pb-0 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-red-500">Author socials</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-grow text-lg max-w-2xl">
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 text-center">
                  Feel free to reach out and give me any feedback!
                </p>
                <div className="flex justify-center">
                  <a href="mailto:contact@cameronstorer.com" className="grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Mail size={32} />
                  <p className="mt-1">Email</p></a>
                  <a href="https://github.com/cameronstorer" target="_blank" rel="noopener noreferrer" className="mx-8 ml-12 grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Github size={32} />
                  <p className="mt-1">GitHub</p></a>
                  <a href="https://www.linkedin.com/in/cameron-storer0" target="_blank" rel="noopener noreferrer" className="grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Linkedin size={32} />
                  <p className="mt-1">LinkedIn</p></a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="text-gray-400 py-6 pt-4 text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Cameron Storer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
