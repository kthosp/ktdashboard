import React from 'react';
import { useQRCode } from 'react-hook-qrcode';

function Qrcode() {
    const [inputRef] = useQRCode({
      text: 'http://www.kthos.go.th/kt/',
      options: {
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#0F691A',
          light: '#FFFFFF',
        },
      },
    });
  
    return  <div className="content"> 
                <img alt ="qrcode" ref={inputRef}  /> 
            </div>
    
  };
  
  export default Qrcode;