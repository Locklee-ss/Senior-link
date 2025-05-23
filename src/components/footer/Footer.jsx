"use client";
import React from "react";
import Logo from "../header/logo/Logo";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";


const currentYear = new Date().getFullYear();

const Footer = () => {
  const {messages} = useLang();
  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={footerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <Logo />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {messages['footerContent']}
            </p>
            <div className="flex space-x-4">
              <Link href="" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-[#206645] dark:text-green-400 hover:bg-[#206645] hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors duration-300">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-[#206645] dark:text-green-400 hover:bg-[#206645] hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors duration-300">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-[#206645] dark:text-green-400 hover:bg-[#206645] hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors duration-300">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-[#206645] dark:text-green-400 hover:bg-[#206645] hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors duration-300">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <h3 className="text-lg font-semibold text-[#206645] dark:text-green-400">
              {messages['quicklinksTitle']}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <span className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#206645] dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {messages["homeTitle"]}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <span className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#206645] dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {messages['aboutusTitle']}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <span className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#206645] dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {messages['contactusTitle']}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                  <span className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#206645] dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {messages['termsofuseTitle']}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <h3 className="text-lg font-semibold text-[#206645] dark:text-green-400">
              {messages['ourservicesTitle']}
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300">
                  {messages['carehomesTitle']}
                </div>
              </li>
              <li>
                <div className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300">
                  {messages['caregiversTitle']}
                </div>
              </li>
              <li>
                <div className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300">
                  {messages['nursesTitle']}
                </div>
              </li>
              <li>
                <div className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300">
                  {messages['seniorstoresTitle']}
                </div>
              </li>
              <li>
                <div className="text-gray-600 dark:text-gray-300 hover:text-[#206645] dark:hover:text-green-400 transition-colors duration-300">
                  {messages['transportTitle']}
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemAnimation} className="space-y-6">
            <h3 className="text-lg font-semibold text-[#206645] dark:text-green-400">
              {messages['contactusTitle']}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#206645] dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Senior Street<br />
                  Warsaw, 00-001<br />
                  Poland
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#206645] dark:text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  +48 123 456 789
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#206645] dark:text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  contact@seniorlink.pl
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} SeniorLink. {messages["copyContent"]}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;