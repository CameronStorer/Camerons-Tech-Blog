"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Instagram } from 'lucide-react';

// Main App component for the portfolio
const App = () => {

  // How many articles to render at once
  const [visCount, setVisCount] = useState(3);
  const [visCount1, setVisCount1] = useState(3);

  // List out articles
  const articles = [
    {
      title: 'My Homelab Tutorial',
      description: 'Read about how I self-host my own services \
      to stream music, host game servers, and store files in the cloud securely!',
      tech: ['#Homelab', '#Docker', '#Jellyfin', '#Nextcloud',],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
  ];
  // List out articles
  const articles1 = [
    {
      title: 'My Homelab Tutorial',
      description: 'Read about how I self-host my own services \
      to stream music, host game servers, and store files in the cloud securely!',
      tech: ['#Homelab', '#Docker', '#Jellyfin', '#Nextcloud',],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
    {
      title: 'test',
      description: 'This is just a simple, \
      yet effective, test widget!',
      tech: ['#TestTag1', '#TestTag2'],
    },
  ];

  // articles that should be rendered currently
  const visarticles = articles.slice(0, visCount);
  const visarticles1 = articles.slice(0, visCount1);

  return (
    <div className="bg-black text-gray-100 font-sans antialiased">


      {/* --- WIP Warning --- */}
      <section className="py-1 pb-0 bg-red-800">
        <div className="container bg-red-800 m-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-1xl text-center m-0 text-black"> This site is still in development</h2>
        </div>
      </section>


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
      {/* header */}
      <div className="text-[2.625rem] md:text-6xl m-auto font-bold 
      font-impact text-red-600 py-35 mb-[-9] md:mb-[-12] text-center relative z-50"> 
        <a href="/">Cameron's Technology Blog</a>
      </div>


      {/* ////////////////////////////////////////////////////////////////////////////////// */}

      <main>
        {/* --- Welcome Section --- */}
        <section id="welcome" className="py-10 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-red-600">Welcome</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-grow text-lg max-w-2xl">
                <p className="mb-3 text-center">
                  This site holds articles written by a junior Louisiana Tech CS student and follows his interesets
                  in the areas of software development, homelabbing, and general cyber security.
                </p>
              </div>
            </div>
          </div>
        </section>


{/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* --- Recent Articles  --- */}
        <section id="recent" className="py-10 pb-10 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-38 2xl:px-68">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Recent Articles</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* map the previously defined 'articles' array values to these visible entities */}
              {/* <a href="/pages/my-homelab-tutorial"> */}
              {visarticles.map((article, index) => {
                // Convert to lowercase and replace all spaces with dashes
                const slug = article.title.toLowerCase().replace(/\s+/g, '-');
                const templink = `/pages/${slug}`;
                
                return (
                <div key={index} className="flex">
                  <a href={templink} className="contents">
                    <div className="bg-gray-900 rounded-xl shadow-xl p-6 transform transition-transform hover:scale-105">
                      <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-400 mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-800 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
                );})}
              </div>
              {/* Expand to see more articles.
              Only show this button if there are more hidden articles...
              Once clicked, show 3 more hidden articles */}
              <div className="mt-10 flex justify-center gap-2">
              {visCount < articles.length && ( // if the visible count is less than the number of articles, show the button
                <button onClick={() => setVisCount(prev => Math.min(prev + 3, articles.length))} // update the current visible number of articles by 3
                  className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                  See more
                </button> 
              )}
              {/* button to 'Show less' articles */}
              {visCount > 3 && ( // if the visible count is more than 3, show this button
                <button onClick={() => visCount > 6 ? setVisCount(prev => Math.min(prev + 3, articles.length)) // ternary operator is used to determine how many articles to remove
                                                    : setVisCount(3)} // update the current visible number of articles by -3 if possible
                  className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                  See less
                </button> 
              )}
              </div>
          </div>
        </section>
        
{/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* --- Popular Articles  --- */}
        <section id="popular" className="py-10 pb-10 scroll-mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-38 2xl:px-68">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Popular Articles</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* map the previously defined 'articles' array values to these visible entities */}
              {/* <a href="/pages/my-homelab-tutorial"> */}
              {visarticles1.map((article1, index) => {
                // Convert to lowercase and replace all spaces with dashes
                const slug = article1.title.toLowerCase().replace(/\s+/g, '-');
                const templink = `/pages/${slug}`;
                
                return (
                <div key={index} className="flex">
                  <a href={templink} className="contents">
                    <div className="bg-gray-900 rounded-xl shadow-xl p-6 transform transition-transform hover:scale-105">
                      <h3 className="text-2xl font-bold text-white mb-2">{article1.title}</h3>
                      <p className="text-gray-400 mb-4">{article1.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article1.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-800 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
                );})}
              </div>

              {/* Expand to see more articles.
              Only show this button if there are more hidden articles...
              Once clicked, show 3 more hidden articles */}
              <div className="mt-10 flex justify-center gap-2">
              {visCount1 < articles1.length && ( // if the visible count is less than the number of articles, show the button
                <button onClick={() => setVisCount1(prev => Math.min(prev + 3, articles1.length))} // update the current visible number of articles by 3
                  className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                  See more
                </button> 
              )}
              {/* button to 'Show less' articles */}
              {visCount1 > 3 && ( // if the visible count is more than 3, show this button
                <button onClick={() => visCount1 > 6 ? setVisCount1(prev => Math.min(prev + 3, articles1.length)) // ternary operator is used to determine how many articles to remove
                                                    : setVisCount1(3)} // update the current visible number of articles by -3 if possible
                  className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                  See less
                </button> 
              )}
              </div>
          </div>
        </section>

{/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* --- Contact Section --- */}
        <section id="contact" className="py-10 pb-0 scroll-mt-35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-red-600">Author socials</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-grow text-lg max-w-2xl">
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 text-center">
                  Feel free to reach out and give me any feedback!
                </p>
                <div className="flex justify-center">
                  <a href="https://instagram.com/cam.storer" target="_blank" rel="noopener noreferrer" 
                  className="mx-6 ml-8 grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Instagram size={32} />
                  <p className="mt-1">Insta</p></a>
                  <a href="mailto:contact@cameronstorer.com" className="mx-6 grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Mail size={32} />
                  <p className="mt-1">Email</p></a>
                  <a href="https://github.com/cameronstorer" target="_blank" rel="noopener noreferrer" 
                  className="mx-6 grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Github size={32} />
                  <p className="mt-1">GitHub</p></a>
                  <a href="https://www.linkedin.com/in/cameron-storer0" target="_blank" rel="noopener noreferrer" 
                  className="mx-6 ml-4 grid items-center justify-items-center text-gray-300 hover:text-red-500 transition-colors">
                    <Linkedin size={32} />
                  <p className="mt-1">LinkedIn</p></a>
                </div>
              </div>
            </div>
          </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://cameronstorer.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-colors transform hover:scale-105">
                Cameron's Portfolio
              </a>
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
