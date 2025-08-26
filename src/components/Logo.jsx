import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#FF7A00"/>
      <path d="M11 28L20 10L29 28H24L20 19L16 28H11Z" fill="#fff"/>
    </svg>
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '1.6rem', 
      color: '#222', 
      letterSpacing: '0.5px',
      fontFamily: 'Arial, sans-serif'
    }}>Lakscode</span>
  </div>
);

export default Logo;
