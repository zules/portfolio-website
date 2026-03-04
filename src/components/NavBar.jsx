import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b-4 border-black z-50">
      <div className="flex w-full bg-brand-light justify-between items-center px-6 lg:px-16 xl:px-64 py-4">
        
        {/* Logo */}
        <NavHashLink to="/Home#top" className="text-2xl font-title text-brand-secondary uppercase ">
          Julia Swan Wroble
        </NavHashLink>

        {/* --- DESKTOP MENU --- */}
        {/* 'hidden' by default, becomes a flex row on medium (md) screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavHashLink to="/#work" className="text-xl font-title text-brand-secondary hover:opacity-80 transition-opacity">My Work</NavHashLink>
          <NavHashLink to="/#about" className="text-xl font-title text-brand-secondary hover:opacity-80 transition-opacity">About Me</NavHashLink>
          <NavHashLink to="/#contact" className="text-xl font-title text-brand-secondary hover:opacity-80 transition-opacity">Contact</NavHashLink>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        {/* Visible by default, 'hidden' on medium (md) screens */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-black focus:outline-none" 
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <svg className={`w-8 h-8 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {/* Close 'X' Icon */}
          <svg className={`w-8 h-8 ${isOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {/* We add 'md:hidden' here so if they resize the browser window while it's open, it safely disappears */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-brand-light border-b-4 border-black flex-col items-end px-6 py-2 space-y-2`}>
        <NavHashLink to="/#work" onClick={() => setIsOpen(false)} className="text-2xl font-title text-brand-secondary hover:opacity-60 transition-opacity">My Work</NavHashLink>
        <NavHashLink to="/#about" onClick={() => setIsOpen(false)} className="text-2xl font-title text-brand-secondary hover:opacity-60 transition-opacity">About Me</NavHashLink>
        <NavHashLink to="/#contact" onClick={() => setIsOpen(false)} className="text-2xl font-title text-brand-secondary hover:opacity-60 transition-opacity">Contact</NavHashLink>
      </div>
    </nav>
  );
}