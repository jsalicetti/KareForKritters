import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <HeartIcon className="w-8 h-8 mr-2 text-orange-400" />
            <span className="text-2xl font-bold">Kare for Kritters</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Locations
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Application Form
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; 2023 Kare for Kritters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
