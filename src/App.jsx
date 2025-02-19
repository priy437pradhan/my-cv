import './App.css' 
import pp from './images/pp.jpg'

import  { useState, useEffect } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };
  
  // Load saved preferences
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Auto detect preferred color scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
    
    // Intersection Observer for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  
  // Projects data
  const projects = [
    {
      title: "Odisha TV Website",
      description: "Led frontend development of the main news portal with responsive layouts, performance optimization, and SEO integration.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Tailwind CSS", "Performance Optimization"]
    },
    {
      title: "Odisha Reporter Website",
      description: "Developed frontend interface for news platform with responsive design patterns and interactive news feed components.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Mobile-first", "Interactive UI"]
    },
    {
      title: "TPCODL Website",
      description: "Leading frontend development of corporate website with modern interface and reusable component library.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Component Library", "Corporate UI"]
    }
  ];
  
  // Skills data
  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3/Sass", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Chrome DevTools", level: 86 },
      { name: "Webpack/Vite", level: 75 },
    ],
    practices: [
      { name: "Responsive Design", level: 90 },
      { name: "Performance Optimization", level: 82 },
      { name: "Web Accessibility", level: 78 },
      { name: "SEO Best Practices", level: 80 },
    ]
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'} backdrop-blur-sm shadow-md transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'} flex items-center justify-center text-white font-bold`}>
              P
            </div>
            <span className={`${darkMode ? 'text-indigo-300' : 'text-purple-700'}`}>Priya</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 items-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className={`${activeSection === section ? (darkMode ? 'text-indigo-300' : 'text-purple-600') : ''} capitalize hover:${darkMode ? 'text-indigo-400' : 'text-purple-500'} transition-colors duration-300`}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`p-2 rounded ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} py-4 px-4 shadow-lg`}>
            <ul className="flex flex-col gap-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 px-4 rounded ${activeSection === section ? 
                      (darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-purple-50 text-purple-600') : 
                      ''} capitalize`}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section 
          id="home" 
          className={`min-h-screen flex items-center pt-16 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950' : 'bg-gradient-to-br from-white via-purple-50 to-indigo-50'}`}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className={`inline-block px-4 py-1 rounded-full mb-4 text-sm font-medium ${darkMode ? 'bg-indigo-900/40 text-indigo-300' : 'bg-purple-100 text-purple-600'}`}>
                  Frontend Developer
                </div>
                <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Hi, I'm <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Priya Pradhan</span>
                </h1>
                <p className={`text-lg mb-6 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Creating responsive, user-centric web experiences with modern frontend technologies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      darkMode ? 
                      'bg-indigo-600 hover:bg-indigo-700 text-white' : 
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      darkMode ? 
                      'bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30' : 
                      'bg-transparent border border-purple-500 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    Contact Me
                  </a>
                </div>
                
                {/* Social Icons */}
                <div className="mt-8 flex gap-4">
                  <a 
                    href="https://github.com/priy437pradhan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode ? 'bg-gray-800 text-gray-400 hover:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:text-purple-600'
                    }`}
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/priyapradhan437" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode ? 'bg-gray-800 text-gray-400 hover:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:text-purple-600'
                    }`}
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://portfolio-nine-neon-88.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode ? 'bg-gray-800 text-gray-400 hover:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:text-purple-600'
                    }`}
                    aria-label="Portfolio"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-indigo-500/30' : 'border-purple-100'}`}>
                  <img 
                    src={pp} 
                    alt="Priya Pradhan" 
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-gradient-to-tr from-indigo-900/40 to-transparent' : 'bg-gradient-to-tr from-purple-100/30 to-transparent'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                About <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Me</span>
              </h2>
              <div className={`h-1 w-16 mx-auto mt-2 rounded ${darkMode ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className={`absolute -top-4 -left-4 w-24 h-24 ${darkMode ? 'bg-indigo-900/30' : 'bg-purple-100'} rounded-lg`}></div>
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${darkMode ? 'bg-indigo-900/30' : 'bg-purple-100'} rounded-lg`}></div>
                <div className="relative z-10">
                  <img 
                    src={pp}
                    alt="Priya Pradhan at work" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
              
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Frontend Developer with a Passion for User Experience</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  With two years of experience in frontend development, I specialize in creating responsive, 
                  user-centric web applications that combine aesthetic appeal with functional excellence.
                </p>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  My journey in tech began after graduating with a degree in Civil Engineering, where I discovered 
                  my passion for building digital experiences. Since then, I've been dedicated to mastering 
                  modern frontend technologies and implementing best practices in web development.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Experience</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>2+ Years</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Education</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.Tech Civil Engineering</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Specialization</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>React, Responsive Design</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Current Focus</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Performance Optimization</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#contact"
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      darkMode ? 
                      'bg-indigo-600 hover:bg-indigo-700 text-white' : 
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    Let's Connect
                  </a>
                  <a 
                    href="#skills"
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      darkMode ? 
                      'bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30' : 
                      'bg-transparent border border-purple-500 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    My Skills
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Technical <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Skills</span>
              </h2>
              <div className={`h-1 w-16 mx-auto mt-2 rounded ${darkMode ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-purple-100 text-purple-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Frontend Technologies</h3>
                
                <div className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-purple-100 text-purple-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Development Tools</h3>
                
                <div className="space-y-4">
                  {skills.tools.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Practices */}
              {/* Practices - Continuation from the previous section */}
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-purple-100 text-purple-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.258 12.565c-.47.341-1.233.501-2.14.501-.905 0-1.668-.16-2.138-.501-.47-.341-.697-.748-.697-1.2 0-.19.06-.373.096-.55.124.262.362.55.697.814.47.341 1.233.501 2.138.501.905 0 1.668-.16 2.138-.501.335-.264.573-.553.697-.814.036.177.096.36.096.55 0 .452-.226.858-.697 1.2zm-1.928-4.243c.13-.96.338-.17.624-.17.393 0 .71.318.71.71 0 .392-.317.71-.71.71a.709.709 0 0 1-.71-.71c0-.085.02-.17.047-.25.74.182.174.309.329.377.031.014.063.027.095.041-.46-.341-1.233-.501-2.138-.501-.905 0-1.668.16-2.138.501-.47.341-.697.748-.697 1.2 0 .451.226.858.697 1.2.47.34 1.233.5 2.138.5.905 0 1.668-.16 2.138-.5.47-.342.697-.749.697-1.2 0-.21-.075-.418-.17-.602.027-.04.05-.08.068-.125z"/>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm3.265 4.621a4.502 4.502 0 0 1 1.605 1.092 4.502 4.502 0 0 1 1.08 1.592 4.502 4.502 0 0 1 .393 1.856c0 .652-.132 1.284-.393 1.856a4.502 4.502 0 0 1-1.08 1.592 4.502 4.502 0 0 1-1.605 1.092 4.502 4.502 0 0 1-1.87.376 4.502 4.502 0 0 1-1.87-.376 4.502 4.502 0 0 1-1.605-1.092 4.502 4.502 0 0 1-1.08-1.592 4.502 4.502 0 0 1-.393-1.856c0-.652.132-1.284.393-1.856a4.502 4.502 0 0 1 1.08-1.592 4.502 4.502 0 0 1 1.605-1.092 4.502 4.502 0 0 1 1.87-.376c.663 0 1.297.125 1.87.376z"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Best Practices</h3>
                
                <div className="space-y-4">
                  {skills.practices.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Additional Skills */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Soft Skills</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {['Problem Solving', 'Team Collaboration', 'Time Management', 'Communication', 'Adaptability', 'Detail-Oriented'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Additional Technical Skills</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {['Web Performance Optimization', 'SEO Implementation', 'Browser Dev Tools', 'Debugging & Testing', 'Mobile-First Design', 'REST API Integration'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Recent <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Projects</span>
              </h2>
              <div className={`h-1 w-16 mx-auto mt-2 rounded ${darkMode ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
              <p className={`max-w-lg mx-auto mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A selection of my recent work showcasing frontend development skills and responsive design implementation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="relative overflow-hidden group">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-purple-600/80'}`}>
                      <a 
                        href="#" 
                        className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-indigo-600 text-white' : 'bg-white text-purple-700'} font-medium`}
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className={`text-xs px-2 py-1 rounded ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-50 text-purple-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://github.com/priy437pradhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode ? 
                  'bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30' : 
                  'bg-transparent border border-purple-500 text-purple-600 hover:bg-purple-50'
                }`}
              >
                View More on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Professional <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Journey</span>
              </h2>
              <div className={`h-1 w-16 mx-auto mt-2 rounded ${darkMode ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Current Job */}
                <div className="relative">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 ${darkMode ? 'border-gray-800 bg-indigo-500' : 'border-gray-50 bg-purple-600'}`}></div>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`md:text-right ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <h3 className="text-xl font-bold">Frontend Developer</h3>
                      <p className={`${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Odisha Television Ltd.</p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>December 2022 - Present</p>
                    </div>
                    <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Leading frontend development for multiple news platforms, focusing on responsive 
                        design and performance optimization.
                      </p>
                      <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                          <span className={`inline-block mt-1 w-2 h-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}></span>
                          <span>Improved website performance by 30% through code optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className={`inline-block mt-1 w-2 h-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}></span>
                          <span>Implemented modern frontend architecture with React</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className={`inline-block mt-1 w-2 h-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-purple-600'}`}></span>
                          <span>Integrated real-time data updates using WebSocket</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Education */}
                <div className="relative">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 ${darkMode ? 'border-gray-800 bg-indigo-500' : 'border-gray-50 bg-purple-600'}`}></div>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`md:text-right ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                      <p className={`${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Civil Engineering</p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Graduated: July 2020</p>
                    </div>
                    <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Graduated from Ajay Binay Institute of Technology, Cuttack, Odisha with 71.12%.
                        Started self-learning web development during final year, participating in 
                        coding workshops and online courses.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Frontend Certifications */}
                <div className="relative">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 ${darkMode ? 'border-gray-800 bg-indigo-500' : 'border-gray-50 bg-purple-600'}`}></div>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`md:text-right ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <h3 className="text-xl font-bold">Frontend Development</h3>
                      <p className={`${darkMode ? 'text-indigo-300' : 'text-purple-600'}`}>Certifications & Training</p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020 - 2022</p>
                    </div>
                    <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Completed extensive training in modern web development technologies and best practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Modern Web Development', 'Advanced JavaScript', 'Responsive Web Design', 'Frontend Performance Optimization'].map((cert, i) => (
                          <span 
                            key={i}
                            className={`text-xs px-2 py-1 rounded ${
                              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-50 text-purple-700'
                            }`}
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Get In <span className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>Touch</span>
              </h2>
              <div className={`h-1 w-16 mx-auto mt-2 rounded ${darkMode ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
              <p className={`max-w-lg mx-auto mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Have a project in mind or want to discuss opportunities? Feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className={`p-6 rounded-lg shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-purple-100 text-purple-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</h4>
                        <a href="mailto:priyapradhan437@gmail.com" className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>
                          priyapradhan437@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-purple-100 text-purple-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Phone</h4>
                        <a href="tel:+917077817064" className={darkMode ? 'text-indigo-400' : 'text-purple-600'}>
                          +91 7077 817 064
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-purple-100 text-purple-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Portfolio</h4>
                        <a 
                          href="https://portfolio-nine-neon-88.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={darkMode ? 'text-indigo-400' : 'text-purple-600'}
                        >
                          portfolio-nine-neon-88.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Connect</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/priy437pradhan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-colors ${
                        darkMode ? 'bg-gray-700 text-gray-400 hover:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:text-purple-600'
                      }`}
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </div>  

                </div> 
              </div> 
            </div>   
          </div>  
        </section>
      </main>  

   </div>
  );
};

export default Portfolio;    