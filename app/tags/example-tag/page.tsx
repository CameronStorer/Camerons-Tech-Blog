"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

// Main App component for the portfolio
const App = () => {

  // List out projects
  const projects = [
    {
      title: 'Automated Pie Cutter',
      description: 'A machine with the purpose of cutting pies \
      into a user-defined number of equally sized slices; created by 2 colleagues and I for presentation at the 2024 Spring COES freshman expo.',
      tech: ['Python', 'Circuitry', 'GPIO', 'Motors', '3D printing/modelling'],
      github: '#',
      live: '#',
    },
    {
      title: 'This Portfolio Site',
      description: 'A web portfolio built to display my acedemic achievements using modern web technologies.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      github: '#',
      live: '#',
    },    
    {
      title: 'Cameron LNG Virtual Helpdesk',
      description: 'During my time interning at Cameron LNG, I began development of a software to reduce the number of unnecessary calls into the IT office.',
      tech: ['Python', 'Tkinter'],
      github: '#',
      live: '#',
    },    
  ];

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      {/* --- Navigation Bar --- */}
      <div className="bg-gray-800 text-[2.625rem] md:text-6xl m-auto font-bold font-serif text-teal-400 pt-4 mb-[-9] md:mb-[-12] text-center relative z-60"> <a href="https://cameronstorer.com">Cameron Storer</a></div>
      <header className="bg-gray-800 shadow-xl sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5 grid items-center justify-center">
          {/* Desktop Navigation Links */}
          <div className="md:flex items-center border-teal-400 border-3 rounded-2xl">
            <a href="#about" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 rounded-full rounded-r-none py-1 md:py-0 px-4 md:px-7">About</a>
            <a href="#projects" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 px-4 md:px-7">Projects</a>
            <a href="#skills" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 px-4 md:px-7">Skills</a>
            <a href="#contact" className="font-bold text-gray-300 hover:bg-teal-400 hover:text-gray-900 duration-200 py-1 md:py-0 rounded-full rounded-l-none px-4 md:px-7">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* --- About Me Section --- */}
        <section id="about" className="py-10 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">About Me</h2>
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
              <a href="#contact" className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-400 transition-colors transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-gray-500 text-gray-200 font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105">
                View My Work
              </a>
            </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 pb-10 bg-gray-800 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-38 2xl:px-68">
            <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">My Projects</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-xl p-6 transform transition-transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                      <ArrowUpRight size={20} className="mr-2" />
                      Learn More
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
              </div>
              <div className="mt-10 flex justify-center">
                <a href="#projects" className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-400 transition-colors transform hover:scale-105">
                  See more
                </a> 
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 bp-10 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-58 xxl:px-70">
            <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              {['Python', 'Java', 'C#', 'HTML', 'Tailwind CSS', 'JavaScript', 
                'Bash Scripting', 'PowerShell Scripting', 'Git',
                'Microsoft Acitve Directory', 'Microsoft SCCM',
                ].map((skill, index) => (
                <div key={index} className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full shadow-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 bg-gray-800 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-teal-400">Get In Touch</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex justify-center">
              <a href="mailto:contact@cameronstorer.com" className="grid items-center justify-items-center text-gray-300 hover:text-teal-400 transition-colors">
                <Mail size={32} />
              <p className="mt-1">Email</p></a>
              <a href="https://github.com/cameronstorer" target="_blank" rel="noopener noreferrer" className="mx-8 ml-12 grid items-center justify-items-center text-gray-300 hover:text-teal-400 transition-colors">
                <Github size={32} />
              <p className="mt-1">GitHub</p></a>
              <a href="https://www.linkedin.com/in/cameron-storer0" target="_blank" rel="noopener noreferrer" className="grid items-center justify-items-center text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin size={32} />
              <p className="mt-1">LinkedIn</p></a>
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
