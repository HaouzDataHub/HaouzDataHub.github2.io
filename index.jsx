// index.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-[Inter]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-semibold tracking-tight text-indigo-600">HaouzDataHub</h1>
        <div className="space-x-5">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#certificates" className="hover:text-indigo-600">Certificates</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.img
          src="images/profil.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto border-4 border-indigo-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-bold mt-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hamza Haouzmani
        </motion.h1>
        <p className="text-gray-500 mt-3 text-lg">
          Data Analyst | Storyteller through data | R, SQL, Python
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <a href="#projects">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow-md">
              View My Work
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">About Me</h2>
        <p className="text-center text-gray-600 leading-relaxed text-lg">
          Passionate data analyst with a focus on transforming raw data into meaningful insights.
          Skilled in R, SQL, Python, and visualization tools. I thrive on solving complex analytical
          problems and creating impactful dashboards that tell a story.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["R", "SQL", "Python", "Tableau", "Excel", "Data Cleaning", "Visualization"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Certifications</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {[
            { img: "images/certificate_google.jpg", title: "Google Data Analytics" },
            { img: "images/certificate_excel.jpg", title: "Excel for Data Analysis" },
          ].map((cert) => (
            <Card key={cert.title} className="overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={cert.img} alt={cert.title} className="w-full h-64 object-cover" />
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <Card className="overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="images/project_cyclistic.png" alt="Cyclistic Case Study" className="w-full h-64 object-cover" />
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">Cyclistic Case Study</h3>
              <p className="text-gray-600 mt-2 text-sm">
                An in-depth analysis of bike-share data to uncover usage patterns and strategies
                to increase customer conversion. Built with R and Tableau.
              </p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium mt-3 inline-block">
                View Case Study →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Get in Touch</h2>
        <p className="text-gray-500 mb-8">Let's connect and collaborate on data-driven projects!</p>
        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/haouzdatahub" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://github.com/HaouzDataHub" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="mailto:haouzdatahub@gmail.com" className="hover:scale-110 transition">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2025 HaouzDataHub — Built with passion and precision.
      </footer>
    </div>
  );
}
