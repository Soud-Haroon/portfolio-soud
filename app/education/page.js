"use client";

import { educations } from "@/utils/data/educations";
import { BsMortarboard, BsCalendar3 } from "react-icons/bs";

export default function EducationPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Educational Background
        </h1>
        <p className="text-white text-lg">My academic journey and achievements</p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple/30 hidden md:block"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div key={edu.id} className="relative flex items-start gap-8 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10">
                  <div className="w-16 h-16 rounded-full bg-purple p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <BsMortarboard className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 lg:p-8 hover:border-purple transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                        {edu.title}
                      </h3>
                      <p className="text-xl text-white font-medium mb-2">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white bg-purple/20 px-4 py-2 rounded-lg border border-purple/30 w-fit whitespace-nowrap">
                      <BsCalendar3 />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="mt-6 pt-6 border-t border-purple/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple"></div>
                      <span className="text-white">Degree Program</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-black/80 border border-purple/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-white mb-4">
              Education is a lifelong journey. I continuously upgrade my skills through online courses, 
              certifications, and hands-on projects to stay current with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
