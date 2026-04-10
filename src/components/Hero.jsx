import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const fullText = "Building powerful applications with React and Python, while creating professional visual designs.";

  const roles = ["Python Developer", "Website Developer"];
  const [displayRole, setDisplayRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 50, y: 40 });

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
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex, displayRole, roles]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setPointerPosition({ x, y });
  };

  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-[80vh] flex-col items-center justify-between overflow-hidden bg-black px-6 py-18 sm:px-10 md:flex-row md:px-20"
      onMouseMove={handlePointerMove}
      style={{
        '--pointer-x': `${pointerPosition.x}%`,
        '--pointer-y': `${pointerPosition.y}%`,
      }}
    >
      <div className="hero-background" aria-hidden="true">
        <div className="hero-ambient"></div>
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-orb hero-orb-three"></div>
        <div className="hero-grid"></div>
        <div className="hero-noise"></div>
        <div className="hero-glow"></div>
        <div className="hero-pointer"></div>
      </div>
      <div className="relative z-10 w-full space-y-4 text-center md:w-1/2 md:text-left">
        <h2 className="animate-slide-up text-3xl font-extrabold leading-tight md:text-5xl">
          <span style={{ color: '#ff4d6d' }}>Software Engineer</span> 
        </h2>
        <div className="min-h-[3rem] text-3xl font-bold text-white md:text-4xl">
          <span style={{ color: 'white' }}>{displayRole}</span>
          <span className="animate-pulse" style={{ color: '#ff4d6d' }}>|</span>
        </div>
        <p className="animate-slide-up animation-delay-200 min-h-[3rem] max-w-xl text-lg text-white/90">
          {fullText}
        </p>
        <div className="animate-slide-up animation-delay-400 mb-8 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#ff4d6d' }}
            onMouseEnter={(e) => { e.currentTarget.querySelector('span').style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.querySelector('span').style.color = 'white'; }}
          >
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="animation-delay-600 relative z-10 mt-12 flex items-center justify-center md:mt-0 md:w-1/2">
        <div className="hero-photo-frame flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-300 hover:scale-105 md:h-80 md:w-80">
          <img src={profileImg} alt="Atiqa" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
