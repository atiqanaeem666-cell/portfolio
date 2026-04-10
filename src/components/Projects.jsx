const Projects = () => {
  const work = [
    { title: "Python Exam System", tech: "Basic Calculator", desc: "A full-scale online quiz platform." },
    { title: "Canva Design Studio", tech: "IT Guidance Form", desc: "Professional menu and certificate designs." },
    { title: "React Portfolio", tech: "Hangman Game", desc: "This modern, responsive portfolio site." }
  ];

  return (
    <section id="projects" className="py-20 px-6 sm:px-10 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {work.map((p, i) => (
          <div key={i} className="p-8 rounded-2xl border border-transparent bg-[#ff4d6d] text-white shadow-lg hover:shadow-2xl transition">
            <span className="text-xs font-bold uppercase text-white/90">{p.tech}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{p.title}</h3>
            <p className="text-white/90 mb-4">{p.desc}</p>
            <button className="px-6 py-2 text-white rounded-lg font-bold transition bg-black hover:bg-[#ff4d6d]" onClick={() => alert('Project link coming soon!')}>
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;