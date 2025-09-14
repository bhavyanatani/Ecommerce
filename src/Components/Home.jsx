// Home.jsx
import React, { useContext } from 'react';
import Tshirt from './Tshirt';
import TextInfo from './TextInfo';
import Navbar from './Navbar';
import Footer from './Footer';
import modecontext from '../context/ModeContext';
export default function Home() {
  const { mode, themeColors } = useContext(modecontext);
  const handleFooterSearchClick = () => {
    console.log('Footer search clicked'); // Debug log
    if (window.focusNavbarSearch) {
      console.log('Calling window.focusNavbarSearch'); // Debug log
      window.focusNavbarSearch();
    } else {
      console.log('window.focusNavbarSearch not found'); // Debug log
    }
  };

  return (
    <div className={`min-h-screen ${themeColors[mode].background}`}>
      <Navbar/>
      <div className="container my-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12">
          <div className={`w-full md:w-2/5 rounded-2xl overflow-hidden ${mode === 'Basic' ? 'bg-white/50' : 'bg-gray-900/50'} backdrop-blur-sm shadow-xl`}>
            <Tshirt />
          </div>
          <div className="w-full md:w-2/5 ">
            <TextInfo />
          </div>
        </div>
      </div>
      <Footer onSearchClick={handleFooterSearchClick}/>
    </div>
  );
}
