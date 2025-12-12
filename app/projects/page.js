"use client";

import { projectsData } from "@/utils/data/projects-data";
import { useState } from "react";
import Link from "next/link";
import { BsCodeSquare, BsBoxArrowUpRight, BsTag } from "react-icons/bs";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-white text-lg">Showcase of my recent work and contributions</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="group bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 lg:p-8 hover:border-purple transition-all duration-300 animate-slide-in-right"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  <BsTag className="text-purple" />
                  <span className="text-sm text-purple font-medium">{project.role}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white mb-6 leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-purple/20 border border-purple/30 rounded-lg text-white text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-purple/30 rounded-lg text-white hover:bg-purple hover:border-purple transition-all duration-300"
                >
                  <BsCodeSquare />
                  <span>View Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple rounded-lg text-white hover:bg-white hover:text-purple transition-all duration-300"
                >
                  <BsBoxArrowUpRight />
                  <span>Live Demo</span>
                </a>
              )}
              {!project.code && !project.demo && (
                <span className="text-white/60 text-sm italic">Details available upon request</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center animate-fade-in">
        <div className="bg-black/80 border border-purple/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
          <p className="text-white mb-6">Let&apos;s collaborate and bring your ideas to life with cutting-edge solutions.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-purple rounded-lg text-white font-semibold hover:bg-white hover:text-purple transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
