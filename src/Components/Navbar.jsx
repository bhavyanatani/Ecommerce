import React, { useState, useRef, useEffect, useContext } from "react";
import searchIcon from "../Pictures/search.png";
import cart from "../Pictures/cart.png";
import account from "../Pictures/account.png";
import wishlist from "../Pictures/wishlist.png";
import modecontext from "../context/ModeContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const { mode, toggleMode, themeColors } = useContext(modecontext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to focus the search input and make it ready for typing
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      // Focus the input
      searchInputRef.current.focus();

      // Simulate a click on the input to make it ready for typing
      // This ensures the search functionality is fully activated
      searchInputRef.current.click();

      // Optional: Select any existing text to allow immediate typing
      searchInputRef.current.select();
    }
  };

  // Expose the focus function to the window object so it can be called from other components
  useEffect(() => {
    window.focusNavbarSearch = focusSearchInput;

    // Cleanup function
    return () => {
      window.focusNavbarSearch = undefined;
    };
  }, []);

  return (
    <nav className={`w-full px-6 py-4 ${mode === 'Basic' ? 'bg-white' : 'bg-gradient-to-r from-slate-900 via-black to-purple-900'} sticky top-0 z-50`}>
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Categories (Left) */}
        <div className="flex space-x-8">
          <a
            href="#"
            className={`px-2 ${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-gray-900 font-medium uppercase text-sm transition-colors`}  
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <a
            href="#"
            className={`px-2 ${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-gray-900 font-medium uppercase text-sm transition-colors`}
            style={{ textDecoration: "none" }}
          >
            Men
          </a>
          <a
            href="#"
            className={`px-2 ${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-gray-900 font-medium uppercase text-sm transition-colors`}
            style={{ textDecoration: "none" }}
          >
            Women
          </a>
          <a
            href="#"
            className={`px-2 ${mode === 'Basic' ? 'text-black' : 'text-white'} hover:text-gray-900 font-medium uppercase text-sm transition-colors`}
            style={{ textDecoration: "none" }}
          >
            Kids
          </a>
        </div>

        {/* Brand (Perfectly Centered) */}
        <div
         className={`absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold ${mode === 'Basic' ? 'text-gray-800' : 'text-white'}`}>
          Cult ByOrigin
        </div>

        {/* Search + Icons (Right) */}
        <div className="flex items-center space-x-8">
          {/* Search Bar */}
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={searchIcon}
                alt="Search"
                className="h-4 w-4 text-gray-400"
              />
            </div>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search for products"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Icons with Labels */}
          <div className="flex space-x-6">
            {/* Profile */}
            <div className="flex flex-col items-center">
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <img
                  src={account}
                  alt="Cart"
                  className="w-6 h-6 object-contain"
                />
              </button>
              <span className={`text-xs ${mode === 'Basic' ? 'text-gray-600' : 'text-white'} mt-1`}>Profile</span>
            </div>

            {/* Wishlist */}
            <div className="flex flex-col items-center">
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <img
                  src={wishlist}
                  alt="Cart"
                  className="w-6 h-6 object-contain"
                />
              </button>
              <span className={`text-xs ${mode === 'Basic' ? 'text-gray-600' : 'text-white'} mt-1`}>Wishlist</span>
            </div>

            {/* Cart */}
            <div className="flex flex-col items-center">
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <img src={cart} alt="Cart" className="w-6 h-6 object-contain" />
              </button>
              <span className={`text-xs ${mode === 'Basic' ? 'text-gray-600' : 'text-white'} mt-1`}>Cart</span>
            </div>

            {/* Toggle Button */}
            <button
              className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
              onClick={toggleMode}
            >
              {mode === "Basic" ? "Luke" : "Basic"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Top Row - Brand, Search, Hamburger */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Cult ByOrigin</div>

          {/* Search Bar - Mobile */}
          <div className="relative flex-1 mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={searchIcon}
                alt="Search"
                className="h-4 w-4 text-gray-400"
              />
            </div>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search for products"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Compact Side Panel */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-1/2 h-full bg-white border-l border-gray-200 shadow-lg z-50 overflow-y-auto">
            <div className="p-4">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    Men
                  </a>

                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    Women
                  </a>

                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    Kids
                  </a>
                </div>
              </div>

              {/* Icons */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase">
                  Account
                </h3>
                <div className="space-y-3">
                  {/* Profile */}
                  <div className="flex space-x-6">
                    {/* Profile Icon */}
                    <div className="flex flex-col items-center">
                      <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <img
                          src={account}
                          alt="Cart"
                          className="w-6 h-6 object-contain"
                        />
                      </button>
                      <span className="text-xs text-gray-600 mt-1">
                        Profile
                      </span>
                    </div>
                  </div>

                  {/* Wishlist */}
                  <div className="flex space-x-6">
                    {/* Wishlist Icon */}
                    <div className="flex flex-col items-center">
                      <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <img
                          src={wishlist}
                          alt="Cart"
                          className="w-6 h-6 object-contain"
                        />
                      </button>
                      <span className="text-xs text-gray-600 mt-1">
                        Wishlist
                      </span>
                    </div>
                  </div>

                  {/* Cart */}
                  <div className="flex space-x-6">
                    {/* Cart Icon */}
                    <div className="flex flex-col items-center">
                      <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <img
                          src={cart}
                          alt="Cart"
                          className="w-6 h-6 object-contain"
                        />
                      </button>
                      <span className="text-xs text-gray-600 mt-1">Cart</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase">
                  Actions
                </h3>
                <button
                  className="w-full px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
                  onClick={toggleMode}
                >
                  {mode === "Basic" ? "Premium" : "Basic"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
