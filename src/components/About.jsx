const About = () => {
  // Your skill data - easy to update later!
  const skills = [
    { name: "WordPress", level: "85%", color: "#ff4d6d" },
    { name: "Python (NumPy+Pandas)", level: "90%", color: "#ff4d6d" },
    { name: "AI/ML", level: "70%", color: "#ff4d6d" },
    { name: "Canva Design", level: "90%", color: "#ff4d6d" },
     { name: "React+Vite", level: "70%", color: "#ff4d6d" },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* 2. Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            About <span style={{ color: '#ff4d6d' }}>Me</span>
          </h1>
          <div className="h-2 w-24 mx-auto rounded-full" style={{ backgroundColor: '#ff4d6d' }}></div>
          <p className="text-2xl text-gray-300 mt-6 font-medium">Software Engineer</p>
        </div>

        {/* 3. Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Your Story */}
          <div className="space-y-8">
            <div className="bg-[#ff4d6d] p-8 rounded-3xl shadow-lg border border-transparent hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer" onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 77, 109, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff4d6d';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <h2 className="text-3xl font-bold text-white mb-6">Who is Atiqa?</h2>
              <p className="text-lg text-white leading-relaxed">
                Enthusiastic Software Engineer with a robust foundation in programming and analytical problem-solving. Proficient in collaborative project work and the development of innovative software solutions. Experienced with HTML, CSS, JavaScript, PHP, SAP basis, QA Testing and Python. Skilled with SAP transactions (SU01, SU10, SUIM, PFCG, SU53, STAUTHTRACE) and enterprise SAP operations. Passionate about learning and integrating emerging technologies, with a strong passion for software development and design. Actively seeking opportunities to contribute meaningfully while advancing my skills in a dynamic and evolving environment.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Now, I've mastered **React** to build modern, fast websites. I also use **Canva** to design everything from professional certificates to brand posters. I believe
                the best code is simple and the best design is clean.
              </p>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="bg-[#050505] p-10 rounded-3xl shadow-xl border border-gray-800 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{}} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 77, 109, 0.05)';
            e.currentTarget.style.borderColor = '#ff4d6d';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#050505';
            e.currentTarget.style.borderColor = '#27272a';
          }}>
            <h3 className="text-2xl font-bold mb-10 text-white">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-300">{skill.name}</span>
                    <span style={{ color: 'rgb(255, 77, 109)', fontWeight: '600' }}>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.level, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Work Experience Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-[#ff4d6d] p-8 rounded-3xl shadow-lg border border-transparent hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer" onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 77, 109, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff4d6d';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <h3 className="text-2xl font-bold text-white mb-3">Web Developer Intern</h3>
              <span className="text-lg font-semibold text-white/90">PSCA Lahore · 2024</span>
              <p className="text-white mt-4">
                Designed and developed dynamic and responsive web pages using HTML, CSS, JavaScript, Bootstrap, and PHP. Integrated frontend and backend components, improved UI layout, and fixed bugs in existing web applications. Assisted in database connectivity and form handling using PHP. Gained experience working in a professional government IT environment and following development standards.
              </p>
            </div>

            <div className="bg-[#ff4d6d] p-8 rounded-3xl shadow-lg border border-transparent hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer" onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 77, 109, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff4d6d';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <h3 className="text-2xl font-bold text-white mb-3">App Developer Intern</h3>
              <span className="text-lg font-semibold text-white/90">PWC Lahore · 2023</span>
              <p className="text-white mt-4">
                Learned and applied Python programming fundamentals such as variables, data types, loops, functions, and conditional statements. Worked on basic Python projects to strengthen problem-solving and logical thinking skills. Practiced writing clean and readable Python code while following basic coding standards. Improved understanding of real-world programming workflows in a remote internship environment.
              </p>
            </div>

            <div className="bg-[#ff4d6d] p-8 rounded-3xl shadow-lg border border-transparent hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer" onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 77, 109, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff4d6d';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <h3 className="text-2xl font-bold text-white mb-3">MTO SAP BASIS Training</h3>
              <span className="text-lg font-semibold text-white/90">2025</span>
              <p className="text-white mt-4">
                Performed SAP user administration and authorization management using SU01, SU10, SU53, SUIM. Created and maintained roles and authorizations using PFCG, including role design, maintenance, and troubleshooting. Worked with monitoring and security transactions such as SM01, SM20, ST04, STAUTHTRACE, SCC1, SCC4, and AT08. Assisted in SAP HANA DB installation using standard procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;