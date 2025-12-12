"use client";

import Link from 'next/link';
import { personalData } from "@/utils/data/personal-data";
import { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="relative border-t bg-black border-purple/30 text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-pink to-transparent shadow-pink-glow"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/70">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 pr-0 sm:pr-10">
            {personalData.github && personalData.github.trim() !== '' && (
              <Link
                target="_blank"
                href={personalData.github}
                className="flex items-center gap-2 uppercase text-white/70 hover:text-pink transition-colors"
              >
                <span>GitHub</span>
              </Link>
            )}
            {personalData.linkedIn && personalData.linkedIn.trim() !== '' && (
              <Link
                target="_blank"
                href={personalData.linkedIn}
                className="flex items-center gap-2 uppercase text-white/70 hover:text-pink transition-colors"
              >
                <span>LinkedIn</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;