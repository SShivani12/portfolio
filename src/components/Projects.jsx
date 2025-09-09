import React from "react";

const projects = [
  {
    title: "Text Classification API",
    description: "Deployed an NLP model with ~80ms latency for real-time inference.",
    image: "https://via.placeholder.com/400x250?text=NLP+API",
    github: "https://github.com/yourusername/text-classification-api",
    demo: "#"
  },
  {
    title: "Android-Controlled Robotic Arm",
    description: "Built a Bluetooth-controlled robotic arm with real-time actuation.",
    image: "https://via.placeholder.com/400x250?text=Robotic+Arm",
    github: "https://github.com/yourusername/robotic-arm",
    demo: "#"
  },
  {
    title: "Autonomous Mobile Robot Simulation",
    description: "Simulation for path planning and obstacle avoidance algorithms.",
    image: "https://via.placeholder.com/400x250?text=Robot+Simulation",
    github: "https://github.com/yourusername/mobile-robot-simulation",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-12 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-700 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
