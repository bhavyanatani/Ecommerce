// Navbar.jsx
import React, { useRef, useState, useContext, useEffect } from "react";
import searchIcon from "../Pictures/search.png";
import modecontext from "../context/modecontext";

const Navbar = () => {
  const searchInputRef = useRef(null);
  const { mode, toggleMode } = useContext(modecontext);

  // focus helper (exposed on window so other components can call it)
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.click();
      searchInputRef.current.select?.();
    }
  };
  useEffect(() => {
    window.focusNavbarSearch = focusSearchInput;
    return () => {
      window.focusNavbarSearch = undefined;
    };
  }, []);

  return (
    <nav
      className={`w-full px-6 py-4 ${
        mode === "Basic"
          ? "bg-white"
          : "bg-gradient-to-r from-slate-900 via-black to-purple-900"
      } sticky top-0 z-50`}
    >
      {/* ---------------------------
          Desktop layout: Brand | Search | Toggle Button
         --------------------------- */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Brand (left) */}
        <div
          className={`flex-shrink-0 text-2xl font-bold ${
            mode === "Basic" ? "text-gray-800" : "text-white"
          }`}
        >
          Cult ByOrigin
        </div>

        {/* Search (middle) */}
        <div className="relative flex-shrink-0 w-44 sm:w-56 md:w-72 lg:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={searchIcon} alt="Search" className="h-4 w-4" />
          </div>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search for products"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
          />
        </div>

        {/* Toggle Button (right) */}
        <button
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
          onClick={toggleMode}
        >
          {mode === "Basic" ? "Premium" : "Basic"}
        </button>
      </div>

      {/* ---------------------------
          Mobile layout
         --------------------------- */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <div className={`text-xl font-bold ${mode === "Basic" ? "text-gray-800" : "text-white"}`}>
            Cult ByOrigin
          </div>

          {/* Search Bar - Mobile */}
          <div className="relative flex-1 mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={searchIcon} alt="Search" className="h-4 w-4 text-gray-400" />
            </div>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search for products"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
            />
          </div>

          {/* Toggle Button */}
          <button
            className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium transition-colors"
            onClick={toggleMode}
          >
            {mode === "Basic" ? "Premium" : "Basic"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
