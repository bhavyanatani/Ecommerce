// Home.jsx
import React, { useContext } from 'react';
import Tshirt from './Tshirt';
import TextInfo from './TextInfo';
import Navbar from './Navbar';
import Footer from './Footer';
import modecontext from '../context/modecontext';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {progress.toFixed(0)} % loaded
      </div>
    </Html>
  );
}

export default function Home() {
  const { mode, themeColors } = useContext(modecontext);

  const handleFooterSearchClick = () => {
    if (window.focusNavbarSearch) {
      window.focusNavbarSearch();
    }
  };

  return (
    <div className={`min-h-screen ${themeColors[mode].background}`}>
      <Navbar />
      <div className="container my-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12">
          
          {/* 3D Model Viewer with Loader */}
          <div
            className={`w-full md:w-2/5 h-[400px] md:h-[500px] rounded-2xl overflow-hidden ${
              mode === 'Basic' ? 'bg-white/50' : 'bg-gray-900/50'
            } backdrop-blur-sm shadow-xl`}
          >
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={<Loader />}>
                <Tshirt />
              </Suspense>
            </Canvas>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-2/5">
            <TextInfo />
          </div>
        </div>
      </div>
      <Footer onSearchClick={handleFooterSearchClick} />
    </div>
  );
}
