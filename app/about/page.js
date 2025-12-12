"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsEnvelope, BsPhone, BsGeoAlt } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode, SiStackoverflow } from "react-icons/si";
import { Briefcase, Rocket, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const socialLinks = [
    { icon: BsGithub, href: personalData.github, label: "GitHub", color: "hover:text-gray-400" },
    { icon: BsLinkedin, href: personalData.linkedIn, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaFacebook, href: personalData.facebook, label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaTwitterSquare, href: personalData.twitter, label: "Twitter", color: "hover:text-blue-400" },
    { icon: SiLeetcode, href: personalData.leetcode, label: "LeetCode", color: "hover:text-orange-400" },
    { icon: SiStackoverflow, href: personalData.stackOverflow, label: "Stack Overflow", color: "hover:text-orange-500" },
  ].filter(social => social.href && social.href.trim() !== '');

  const stats = [
    { label: "Years Experience", value: "4+", icon: Briefcase, color: "text-purple" },
    { label: "Projects Completed", value: "6+", icon: Rocket, color: "text-purple" },
    { label: "Technologies", value: "14+", icon: Zap, color: "text-purple" },
    { label: "Full Stack Apps", value: "6+", icon: Code2, color: "text-purple" },
  ];

  return (
    <div className="min-h-screen py-12 lg:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          About Me
        </h1>
        <p className="text-white text-lg">Get to know more about my journey and expertise</p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
        {/* Profile Image & Social */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-purple/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-black/80 backdrop-blur-sm border border-purple/30 rounded-2xl p-6 shadow-elegant">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Image
                    src="/soud.jpg"
                    width={200}
                    height={200}
                    alt={personalData.name}
                    className="rounded-full border-4 border-purple/50 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-white mb-2">{personalData.name}</h2>
              <p className="text-center text-white/80 mb-6">{personalData.designation}</p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-3 bg-black/50 rounded-lg border border-purple/30 text-white transition-all duration-300 hover:text-white hover:border-purple hover:bg-purple`}
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-6 border-t border-purple/30">
                <div className="flex items-center gap-3 text-white">
                  <BsEnvelope className="text-purple" />
                  <a href={`mailto:${personalData.email}`} className="text-sm text-white hover:text-purple transition-colors">{personalData.email}</a>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <BsPhone className="text-purple" />
                  <a href={`tel:${personalData.phone}`} className="text-sm text-white hover:text-purple transition-colors">{personalData.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <BsGeoAlt className="text-purple" />
                  <span className="text-sm text-white">{personalData.address}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Bio */}
          <div className="bg-black/80 backdrop-blur-sm border border-purple/30 rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple rounded"></span>
              Who I Am
            </h3>
            <p className="text-white leading-relaxed text-lg">{personalData.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/80 border border-purple/30 rounded-xl p-6 text-center hover:border-purple transition-all duration-300"
              >
                <div className="flex justify-center mb-2">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Highlights */}
          <div className="bg-black/80 backdrop-blur-sm border border-purple/30 rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple rounded"></span>
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Flutter", "React", "React Native", "Node.js", "MongoDB", "Firebase", "TypeScript", "PostgreSQL"].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-black border border-purple/30 rounded-lg text-white text-sm font-medium hover:border-purple hover:bg-purple/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


