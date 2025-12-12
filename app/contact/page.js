"use client";

import { personalData } from "@/utils/data/personal-data";
import { isValidEmail } from "@/utils/check-email";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        '/api/contact',
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
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
          Get In Touch
        </h1>
        <p className="text-white text-lg">
          I'm always open to discussing new opportunities and exciting projects
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="w-full">
              <p className="font-medium mb-5 text-white text-xl uppercase">Contact with me</p>
              <div className="w-full text-white rounded-lg border border-purple/30 p-6 lg:p-8 bg-black/80">
                <p className="text-sm text-white mb-6">
                  If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
                </p>
                <form onSubmit={handleSendMail} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-base text-white">Your Name:</label>
                    <input
                      className="bg-black/50 w-full border rounded-md border-purple/30 focus:border-purple ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
                      type="text"
                      maxLength="100"
                      required={true}
                      onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                      onBlur={checkRequired}
                      value={userInput.name}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base text-white">Your Email:</label>
                    <input
                      className="bg-black/50 w-full border rounded-md border-purple/30 focus:border-purple ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
                      type="email"
                      maxLength="100"
                      required={true}
                      value={userInput.email}
                      onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                      onBlur={() => {
                        checkRequired();
                        setError({ ...error, email: !isValidEmail(userInput.email) });
                      }}
                    />
                    {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base text-white">Your Message:</label>
                    <textarea
                      className="bg-black/50 w-full border rounded-md border-purple/30 focus:border-purple ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white resize-none"
                      maxLength="500"
                      name="message"
                      required={true}
                      onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                      onBlur={checkRequired}
                      rows="4"
                      value={userInput.message}
                    />
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 mt-2">
                    {error.required && <p className="text-sm text-red-400">
                      All fields are required!
                    </p>}
                    <button
                      type="submit"
                      className="flex items-center gap-1 hover:gap-3 rounded-full bg-purple px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:bg-white hover:text-purple md:font-semibold"
                      disabled={isLoading}
                    >
                      {
                        isLoading ?
                        <span>Sending Message...</span>:
                        <span className="flex items-center gap-1">
                          Send Message
                          <TbMailForward size={20} />
                        </span>
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-black/80 border border-purple/30 rounded-xl p-8 shadow-elegant">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <MdAlternateEmail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="text-lg text-white hover:text-purple transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <IoMdCall className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Phone</p>
                  <a 
                    href={`tel:${personalData.phone}`}
                    className="text-lg text-white hover:text-purple transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <CiLocationOn className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Location</p>
                  <p className="text-lg text-white">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-purple/30">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex items-center gap-4 flex-wrap">
                {personalData.github && personalData.github.trim() !== '' && (
                  <Link 
                    target="_blank" 
                    href={personalData.github}
                    className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 text-white"
                  >
                    <IoLogoGithub size={32} />
                  </Link>
                )}
                {personalData.linkedIn && personalData.linkedIn.trim() !== '' && (
                  <Link 
                    target="_blank" 
                    href={personalData.linkedIn}
                    className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 text-white"
                  >
                    <BiLogoLinkedin size={32} />
                  </Link>
                )}
                {personalData.twitter && personalData.twitter.trim() !== '' && (
                  <Link 
                    target="_blank" 
                    href={personalData.twitter}
                    className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 text-white"
                  >
                    <FaXTwitter size={32} />
                  </Link>
                )}
                {personalData.stackOverflow && personalData.stackOverflow.trim() !== '' && (
                  <Link 
                    target="_blank" 
                    href={personalData.stackOverflow}
                    className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 text-white"
                  >
                    <FaStackOverflow size={32} />
                  </Link>
                )}
                {personalData.facebook && personalData.facebook.trim() !== '' && (
                  <Link 
                    target="_blank" 
                    href={personalData.facebook}
                    className="bg-purple/30 p-3 rounded-full hover:bg-purple hover:scale-110 transition-all duration-300 text-white"
                  >
                    <FaFacebook size={32} />
                  </Link>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-purple/30">
              <p className="text-white/80 text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, 
                please feel free to call or reach out via LinkedIn.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

