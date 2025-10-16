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
      <div className="bg-gray-800 text-[2.625rem] md:text-6xl m-auto font-bold 
      font-serif text-red-500 py-4 mb-[-9] md:mb-[-12] text-center relative z-60"> 
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
        {/* --- Blog Content --- */}
        <section id="blog-content" className="py-10 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">My Homelab Tutorial</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-grow text-lg max-w-2xl">
                <p className="mb-3">
                  It is possible an infinite amout of cloud accessible storage without having to pay a dime to Google or Microsoft.
                  Let's talk about it. <br/><br/>

                  Every service you use online is likely being hosted by a company at some large computing center on a server; the server, likely sitting next to hundreds
                  or even thousands of neighboring servers. This is cool and all, but do you ever get aggravated when a company decides to up
                  their prices for the use a service they provide? Or when they decide to implement more ads... or collect more of your precious data?
                  If you answered yes to any of the previous questions, the non-caped hero you need is self-hosting.
                  <br/><br/>
                  But what exactly is self-hosting? Self-hosting describes
                  hosting a local or online service yourself, often to avoid having to use a similar service provided by another entity.
                  Examples of services that you could be self-hosing include music/video streaming, cloud storage, game server, and task automation services.
                  <br/><br/>
                  Now you are probably wondering, "How do I host said services?" And my response to that would be, "Don't worry, noob, I got you!"
                  Here is a short outline that I have created to describe what the process of setting up your service can look like:
                  <br/><br/>

                    <ul className="list-decimal list-inside leading-loose bg-gray-800 p-5 border-1 rounded-lg ">
                      <li>Find some old computer lying around (or buy dedictated server hardware)</li>
                      <li>Re-image the machine with an operating system of your choice (more on this later)</li>
                      <li>Research the service that you would like to self-host.</li>
                      <li>Install the necessary software and run the service</li>
                      <li>If desired, tunnel your connection through a reverse proxy software for access
                        beyond your local network
                      </li>
                    </ul>

                  <br/>
                  I am now going to explain this process in more depth. In regards to the machine that you decide to
                  host your service on, as long as that machine can boot into Windows or Linux, this tutorial will
                  likely work for that machine. Common examples of computing devices used to self-host services include
                  Rasberry Pis, old family desktops, and old personal laptops. Once you have selected your desired machine,
                  it is now important that you back up any files that you deem important on the system as the following steps
                  will result in your machine's data being completely wiped to allow for the new OS (Operating System) to
                  be installed.

                  <br/><br/>

                  It is now time to choose an operating system. For this situation I will highly recommend a Linux-based OS, and
                  in particular, one without a GUI (Graphical User Interface). This is because if you decide to leave your machine
                  running constantly for weeks on end, the more software that is packed into your OS by default, the higher
                  the cost of electricity that your machine will consume over time. This makes sense as more processes will likely run
                  at any given time when there is more software to create those processes. For this example, the latest Debian
                  OS is recommended for this reason. Debain is an open source and often light-weight Linux distrobution that can manage your installed services
                  and importantly your machine's resources. Here is a guide on <a href="https://www.debian.org/releases/trixie/arm64/" target="_blank" 
                  rel="noopener noreferrer" className="text-red-500">how to install Debian on your machine</a>.

                  <br/><br/>
                  
                  Unfinished... Check back later for updates, or look up how to self host a service on YouTube.
                  <br/><br/>
                  I love the concept of self-hosting for many reasons, including the amount of control and freedom
                  it brings to users when configuring the services hosted. Self-hosting can also greatly increases users' privacy.
                  In a world full of digital, personally directed advertisements, it is understandable that large corporations
                  would do just about anything they can to gather peoples' data... 
                  
                  <br/><br/>
                  Happy Hosting!
                </p>
              </div>
            </div>
          </div>
            <div className="mt-1 flex justify-center space-x-4">
              <p className="text-red-500 font-bold py-3 px-8 ">
                Thanks for reading!
              </p>
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
      <footer className="text-gray-400 py-6 text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Cameron Storer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
