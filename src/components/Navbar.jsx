import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700 shadow-sm">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <a href="#hero" className="text-xl font-bold text-white" style={{ background: 'linear-gradient(45deg, #ff4d6d, #ff4d6d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Engr.Atiqa
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-white hover:border-pink-500 transition"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-2xl">{menuOpen ? '×' : '☰'}</span>
        </button>

        <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-8 font-bold text-white w-full md:w-auto bg-black/95 md:bg-transparent p-4 md:p-0 rounded-3xl md:rounded-none`}>
          <li>
            <a
              href="#hero"
              className="block transition"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = '#ff4d6d'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block transition"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = '#ff4d6d'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block transition"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = '#ff4d6d'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block transition"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = '#ff4d6d'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;