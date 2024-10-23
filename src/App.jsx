import './App.css'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="mb-8">
        <div className="flex items-center gap-6">
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Priya Pradhan</h1>
            <h2 className="text-2xl text-blue-600 mb-4">React Developer</h2>
            <div className="flex flex-wrap gap-4">
            <div className="flex gap-4">
  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
    <a href="mailto:priyapradhan437@gmail.com" className="flex items-center gap-2">
      <Mail size={16} />
      priyapradhan437@gmail.com
    </a>
    <a href="tel:+917077817064" className="flex items-center gap-2">
      <Phone size={16} />
      7077817064
    </a>
  </div>
</div>
<div className="flex gap-4">
  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
    <a href="https://github.com/priy437pradhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <Github size={16} />
      github.com/priy437pradhan
    </a>
    <a href="https://www.linkedin.com/in/priyapradhan437/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <Linkedin size={16} />
      linkedin.com/in/priyapradhan437/
    </a>
  </div>
</div>

              
            </div>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h3>
        <h5 className="text-l font-bold text-gray-900 mb-2" >Passionate React Developer with 2 Years of Experience in News Channel Development</h5>
        <p className="text-gray-700 leading-relaxed">
        I am a dedicated React developer with two years of experience building scalable and performant web applications, specifically for a news channel. I specialize in creating responsive user interfaces using modern React practices, including hooks, context, and Redux. My work is driven by a strong focus on clean code, testing, and performance optimization, ensuring a seamless and engaging experience for users. I thrive in dynamic environments, collaborating closely with cross-functional teams to deliver high-quality solutions that meet the evolving needs of our audience.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Frontend Development</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js, Redux, Context API</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tools & Others</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Git, GitHub</li>
              <li>Jest, React Testing Library</li>
              <li>Webpack, Vite</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Featured Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">News Website FrontEnd
              </h4>
              <a href="https://odisha-tv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-gray-700 mb-2">
            Created a dynamic front-end for a news website using React and Tailwind CSS, featuring responsive layouts and engaging user interfaces for an enhanced reading experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">React</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Redux</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Tailwind</span>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">Whatsapp Ordering App
              </h4>
              <a href="https://bharti-onegram-gold.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-gray-700 mb-2">
            Developed a WhatsApp ordering app using React and Tailwind CSS, providing users with a seamless and responsive interface for easy meal and product ordering.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">React</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Tailwind</span>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Work Experience</h3>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-xl font-semibold text-gray-900">React Developer</h4>
              <p className="text-gray-600">Odisha Television Ltd.</p>
            </div>
            <p className="text-gray-600">Dec 2022 - Present</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <h3 className="text-l font-semibold text-gray-800">News Website Redesign</h3>
            <li>Uilt a responsive news website with React.js, integrating live feeds, featured stories, and improved mobile performance.</li>
            <li>Developed article pages using React.js with infinite scrolling, and SEO optimization (Next.js).</li>
            <li> Designed a multimedia-rich news portal with React.js, incorporating video, image galleries, and trending news displays.</li>
           
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
    <h3 className="text-l font-semibold text-gray-800">Real-time News Features and Enhancements</h3>
    <li>Implemented live data fetching for real-time news updates using REST APIs and WebSockets, significantly improving user engagement.</li>
    <li>Refactored and optimized the frontend codebase, reducing page load time by 30% and enhancing overall website performance on mobile and desktop.</li>
    <li>Integrated dynamic components for user-specific content suggestions, improving session duration and click-through rates.</li>
    <li>Collaborated with the design team to enhance user experience with modern UI components and animations using React and Tailwind CSS.</li>
  </ul>
        </div>
        
        
      </section>

   
     

      <section>
  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Education</h3>

  <div className="flex justify-between items-start mb-4">
    <div>
      <h4 className="text-xl font-semibold text-gray-900">Bachelor of Technology in Civil Engineering</h4>
      <p className="text-gray-600">Ajay Binay Institute of Technology, Cuttack, Odisha</p>
      <p className="text-gray-600">Aug 2016 - July 2020 | Percentage: 71.12%</p>
    </div>
    <p className="text-gray-600">Graduated: 2020</p>
  </div>

  <div className="flex justify-between items-start mb-4">
    <div>
      <h4 className="text-xl font-semibold text-gray-900">Pre University Education (+2 Science)</h4>
      <p className="text-gray-600">Ravenshaw Junior College, Cuttack, Odisha</p>
      <p className="text-gray-600">July 2014 - Apr 2016 | Percentage: 61.5%</p>
    </div>
  </div>

  <div className="flex justify-between items-start mb-4">
    <div>
      <h4 className="text-xl font-semibold text-gray-900">Schooling (6th-10th)</h4>
      <p className="text-gray-600">Secondary Board High School, Cuttack, Odisha</p>
      <p className="text-gray-600">May 2009 - Apr 2014 | Percentage: 88.33%</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Resume;
