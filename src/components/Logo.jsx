import React from 'react';
import logoImage from '../assets/logo.png';

const Logo = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '0.6rem',
    minWidth: 'fit-content'
  }}>
    <img 
      src={logoImage} 
      alt="Lakscode Logo" 
      style={{ 
        width: '65px', 
        height: '65px',
        objectFit: 'contain',
        flexShrink: 0
      }} 
    />
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', 
      color: '#222', 
      letterSpacing: '0.5px',
      fontFamily: 'Arial, sans-serif',
      whiteSpace: 'nowrap'
    }}>Lakscode</span>
  </div>
);

export default Logo;
