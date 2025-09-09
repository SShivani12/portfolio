import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Brain, Database, Cloud, Download, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "I build AI-driven solutions that solve real-world problems.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Smart Resume Screener",
      description: "AI-powered resume screening system using BERT and NLP to match candidates with job requirements. Increased hiring efficiency by 70%.",
      tech: ["Python", "BERT", "Flask", "React", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "🤖"
    },
    {
      title: "Text Classification API",
      description: "RESTful API for multi-class text classification using transformer models. Handles 10k+ requests daily with 95% accuracy.",
      tech: ["Python", "FastAPI", "Transformers", "Docker", "AWS"],
      github: "#",
      demo: "#",
      image: "📊"
    },
    {
      title: "Android-Controlled Robotic Arm",
      description: "IoT project combining Android app with Arduino-controlled robotic arm. Real-time gesture recognition and remote control.",
      tech: ["Java", "Android", "Arduino", "IoT", "Bluetooth"],
      github: "#",
      demo: "#",
      image: "🦾"
    }
  ];

  const skills = {
    "Programming": ["Python", "Java", "JavaScript", "C++"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "BERT", "GPT", "OpenCV"],
    "Data": ["SQL", "Oracle", "MongoDB", "Pandas", "NumPy"],
    "Cloud & Tools": ["AWS", "Docker", "Git", "Hadoop", "Spark", "Linux"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ravindra Singh
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              {['Hero', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Ravindra Singh
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center">
              <span className="border-r-2 border-cyan-400 animate-pulse pr-1">
                {displayText}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
              <Download className="group-hover:animate-bounce" />
              View Resume
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="group border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Code className="group-hover:animate-spin" />
              See My Work
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Machine Learning Engineer with an M.Sc. in Information Technology, 
                specializing in NLP and AI-driven solutions. I love transforming complex data into 
                actionable insights and building intelligent systems that make a real difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <Brain className="text-cyan-400 mb-2" size={24} />
                  <h4 className="font-semibold">ML Specialist</h4>
                  <p className="text-sm text-gray-400">NLP & Deep Learning</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <Database className="text-purple-400 mb-2" size={24} />
                  <h4 className="font-semibold">Data Expert</h4>
                  <p className="text-sm text-gray-400">Big Data & Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {category === "Programming" && <Code className="text-cyan-400 mr-3" size={24} />}
                  {category === "ML/AI" && <Brain className="text-purple-400 mr-3" size={24} />}
                  {category === "Data" && <Database className="text-green-400 mr-3" size={24} />}
                  {category === "Cloud & Tools" && <Cloud className="text-orange-400 mr-3" size={24} />}
                  <h3 className="text-lg font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-sm hover:border-cyan-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="block text-sm font-medium mb-2 text-gray-300">Name</div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium mb-2 text-gray-300">Email</div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium mb-2 text-gray-300">Message</div>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Contact form submitted! In a real implementation, this would send the message.');
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Ravindra Singh. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;