import React, { useContext } from "react";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import modecontext from "../context/modecontext";

const Footer = () => {
  const { mode, themeColors } = useContext(modecontext);

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (window.focusNavbarSearch) {
      window.focusNavbarSearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`${
        mode === "Basic"
          ? "bg-white border-t border-gray-200"
          : "bg-black border-t border-gray-700"
      } py-12`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Brand */}
          <div>
            <h2
              className={`text-2xl font-bold ${
                mode === "Basic" ? "text-gray-800" : "text-white"
              } mb-4 transition-colors duration-300`}
            >
              Cult ByOrigin
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            {/* First Column */}
            <div>
              <button
                onClick={handleSearchClick}
                className={`${
                  mode === "Basic" ? "text-black" : "text-white"
                } block font-semibold transition-all duration-300 cursor-pointer no-underline hover:underline hover:scale-105 bg-transparent border-none mb-3`}
              >
                Search
              </button>

              <button
                onClick={() => console.log("E-receipt clicked")}
                className={`${
                  mode === "Basic" ? "text-black" : "text-white"
                } block font-semibold transition-all duration-300 cursor-pointer no-underline hover:underline hover:scale-105 bg-transparent border-none mb-3`}
              >
                E-receipt
              </button>

              <label
                htmlFor="upload"
                className={`flex items-center space-x-2 font-semibold ${
                  mode === "Basic" ? "text-black" : "text-white"
                } transition-all duration-300 cursor-pointer hover:underline hover:scale-105`}
              >
                <span>Add your pictures</span>
              </label>
              <input
                type="file"
                id="upload"
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Connect Section */}
            <div className="space-y-2 ">
              <p
                className={`${themeColors[mode].text} font-semibold transition-all duration-300 cursor-pointer hover:underline hover:scale-105`}
              >
                Connect
              </p>

              <a
                href="tel:xxx"
                className={`flex items-center space-x-2 ${
                  mode === "Basic" ? "text-black" : "text-white"
                } !no-underline transition-all duration-300 hover:text-green-500 hover:scale-105`}
              >
                <Phone className="w-4 h-4" />
                <span>9999xxxxxx</span>
              </a>

              <a
                href="mailto:xxx@gmail.com"
                className={`flex items-center space-x-2 ${
                  mode === "Basic" ? "text-gray-700" : "text-gray-300"
                } !no-underline transition-all duration-300 hover:text-red-500 hover:scale-105`}
              >
                <Mail className="w-4 h-4" />
                <span>abc@gmail.com</span>
              </a>

              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="transition-transform duration-300 hover:scale-110 hover:text-pink-500"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="transition-transform duration-300 hover:scale-110 hover:text-blue-600"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="transition-transform duration-300 hover:scale-110 hover:text-sky-500"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-auto">
            <h3
              className={`text-lg font-bold ${themeColors[mode].text} mb-4 uppercase`}
            >
              BE OUR FRIEND!
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-semibold ${
                    mode === "Basic" ? "text-gray-700" : "text-gray-300"
                  } mb-1`}
                >
                  Email *
                </label>
                <input
                  type="email"
                  className={`w-full border-b ${
                    mode === "Basic"
                      ? "border-gray-300 text-gray-700"
                      : "border-gray-700 text-gray-300"
                  } bg-transparent py-2 focus:outline-none focus:border-purple-500 transition-all duration-300`}
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className={`rounded ${
                    mode === "Basic" ? "border-gray-300" : "border-gray-700"
                  }`}
                />
                <label
                  htmlFor="newsletter"
                  className={`text-sm ${
                    mode === "Basic" ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>
              <button
                type="submit"
                className={`w-full md:w-auto px-6 py-2 border-2 ${
                  mode === "Basic"
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                } transition-all duration-300 hover:scale-105`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mt-8">
        <p
          className={`text-center ${
            mode === "Basic" ? "text-gray-500" : "text-gray-400"
          } text-sm`}
        >
          Copyright © 2025 Cult ByOrigin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
