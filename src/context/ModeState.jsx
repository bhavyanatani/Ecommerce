import {useState} from 'react'
import modecontext from './modecontext'

const ModeState = (props) => {
    const [mode,setMode] = useState('Basic');
    
    // Theme colors for different modes
    const themeColors = {
        Basic: {
            background: 'bg-gradient-to-b from-gray-50 to-white',
            text: 'text-gray-800',
            cardBg: 'bg-white',
            buttonBg: 'bg-gray-800 hover:bg-gray-700',
            buttonText: 'text-white'
        },
        Luke: {
            background: 'bg-gradient-to-r from-slate-900 via-black to-purple-900',
            text: 'text-white',
            cardBg: 'bg-gray-900',
            buttonBg: 'bg-purple-800 hover:bg-purple-700',
            buttonText: 'text-white'
        }
    };
    
    const toggleMode = () =>{
        setMode(mode === 'Basic' ? 'Luke' : 'Basic');
    }
  return (
    <modecontext.Provider value={{mode, toggleMode, themeColors}}>
        {props.children}
    </modecontext.Provider>
  )
}

export default ModeState;
