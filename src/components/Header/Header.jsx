import React, { useState, useEffect } from 'react';

import './/Header.scss';

export default function Header({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return <header className={`header ${isSticky ? 'sticky' : ''}`}>{children}</header>;
  // return <header className='header'>{children}</header>;
}
