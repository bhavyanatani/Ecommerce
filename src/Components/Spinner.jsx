import React from 'react';
import { useContext } from 'react';
import modecontext from '../context/modecontext';

const Spinner = () => {
  const { mode } = useContext(modecontext);
  
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-solid" 
           style={{ 
             borderTopColor: mode === 'dark' ? '#ffffff' : '#000000',
             borderBottomColor: mode === 'dark' ? '#ffffff' : '#000000',
             borderLeftColor: 'transparent',
             borderRightColor: 'transparent'
           }}>
      </div>
    </div>
  );
};

export default Spinner;