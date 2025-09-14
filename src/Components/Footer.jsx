import React, { useContext } from "react";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import modecontext from '../context/ModeContext';
const Footer = () => {
  const { mode, themeColors } = useContext(modecontext);
  // Function to handle search click
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (window.focusNavbarSearch) {
      window.focusNavbarSearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
    <footer className={`${mode === 'Basic' ? 'bg-white border-t border-gray-200' : 'bg-black border-t border-gray-700'} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Brand */}
          <div>
            <h2 className={`text-2xl font-bold ${mode === 'Basic' ? 'text-gray-800' : 'text-white'} mb-4`}>
              Cult ByOrigin
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            {/* First Column */}
            <div className="space-y-1">
              <a
                href="#"
                className={`${mode === 'Basic' ? 'text-black' : 'text-white'} block hover:text-gray-900 font-semibold transition-colors text-left`}
                onClick={handleSearchClick}
                style={{ textDecoration: "none" }}
              >
                Search
              </a>

              <a
                href="#"
                className={`${mode === 'Basic' ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-300'} block font-semibold transition-colors text-left`}
                style={{ textDecoration: "none" }}
              >
                E-receipt
              </a>

              {/* Add your pictures */}
              <div>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log("File selected:", file.name);
                      // Preview or upload logic here
                    }
                  }}
                />
                <label
                  htmlFor="upload"
                  className={`flex items-center space-x-2 font-semibold ${mode === 'Basic' ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-300'} transition-colors text-left cursor-pointer`}
                  style={{ textDecoration: "none" }}
                >
                  <span>Add your pictures</span>
                </label>
              </div>
            </div>

            {/* Second Column (Connect Section) */}
            <div className="space-y-4">
              <p className={`${themeColors[mode].text} font-semibold`}>Connect</p>
              {/* text-black block hover:text-gray-900 transition-colors text-left */}
              {/* Phone */}
              <a
                href="tel:xxx"
                className={`flex ${mode === 'Basic' ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-300'} items-center space-x-2 transition-colors no-underline`}
                style={{ textDecoration: "none" }}
              >
                <Phone className="w-4 h-4" />
                <span>xxx</span>
              </a>

              {/* Email */}
              <a
                href="mailto:xxx@gmail.com"
                className={`flex items-center space-x-2 ${mode === 'Basic' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors no-underline`}
                style={{ textDecoration: "none" }}
              >
                <Mail className="w-4 h-4" />
                <span>xxx@gmail.com</span>
              </a>

              {/* Social Media */}
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className={`${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-pink-500 transition-colors no-underline`}
                  aria-label="Instagram"
                  style={{ textDecoration: "none" }}                  
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-blue-600 transition-colors no-underline`}
                  aria-label="Facebook"
                  style={{ textDecoration: "none" }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-sky-500 transition-colors no-underline`}
                  aria-label="Twitter"
                  style={{ textDecoration: "none" }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-auto">
            <h3 className={`text-lg font-bold ${themeColors[mode].text} mb-4 uppercase`}>
              BE OUR FRIEND
            </h3>
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold ${mode === 'Basic' ? 'text-gray-700' : 'text-gray-300'} mb-1`}>
                  Email *
                </label>
                <input
                  type="email"
                  className={`w-full border-b ${mode === 'Basic' ? 'border-gray-300 text-gray-700' : 'border-gray-700 text-gray-300'} bg-transparent py-2 focus:outline-none focus:border-gray-500`}
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className={`rounded ${mode === 'Basic' ? 'border-gray-300' : 'border-gray-700'}`}
                />
                <label htmlFor="newsletter" className={`text-sm ${mode === 'Basic' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>
              <button
                type="submit"
                className={`w-full md:w-auto px-6 py-2 border-2 ${mode === 'Basic' ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'} transition-colors font-medium`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    <div className="container">
      <p className={`text-center ${mode === 'Basic' ? 'text-gray-500' : 'text-gray-400'} text-sm`}>
        Copyright © 2025 Cult ByOrigin. All rights reserved.
      </p>
    </div>
    </footer>
    </>
  );
};

export default Footer;
