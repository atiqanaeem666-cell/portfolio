import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const fullText = "Building powerful applications with React and Python, while creating professional visual designs.";

  const roles = ["Python Developer", "Website Developer"];
  const [displayRole, setDisplayRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleDelay, setRoleDelay] = useState(false);

  // Typing animation for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayRole(prev => prev + currentRole[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setRoleDelay(true);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayRole(displayRole.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleDelay(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex, displayRole, roles]);

  return (
    <section id="hero" className="hero-section min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-10 md:px-20 relative overflow-hidden bg-black">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-orb hero-orb-three"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="md:w-1/2 w-full space-y-4 relative z-10 animate-fade-in text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight animate-slide-up">
          <span style={{ color: '#ff4d6d' }}>Software Engineer</span> 
        </h2>
        <div className="text-3xl md:text-4xl font-bold min-h-[3rem] text-white">
          <span style={{ color: 'white' }}>{displayRole}</span>
          <span className="animate-pulse" style={{ color: '#ff4d6d' }}>|</span>
        </div>
        <p className="text-lg animate-slide-up animation-delay-200 min-h-[3rem] text-white">
          {fullText}
        </p>
        <div className="animate-slide-up animation-delay-400 pt-2 mb-8">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white" style={{ backgroundColor: '#ff4d6d' }} onMouseEnter={(e) => { e.target.querySelector('span').style.color = '#fff'; }} onMouseLeave={(e) => { e.target.querySelector('span').style.color = 'white'; }}>
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative z-10 animate-fade-in animation-delay-600">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:border-#ff4d6d-200 transition-all duration-300 transform hover:scale-105">
          <img src={profileImg} alt="Atiqa" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
