import React from 'react';
import bill from '../assets/BILL.png';
import res from '../assets/RES.png';
import sky from '../assets/Sky.png';
import bike from '../assets/bike.png';

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "SkyTeller",
      description: "A production-grade interface for Revappayya IT Services. Engineered for high-density data and effortless user flow.",
      image: sky,
      tech: "React / Tailwind",
    },
    {
      id: "02",
      title: "Cradiac Bikes",
      description: "Cross-platform fluidity meets native performance. A study in mobile interaction and API synchronization.",
      image: bike,
      tech: "React / Tailwind",
    },
    {
      id: "03",
      title: "RITS Billing Suite",
      description: "Stripping away the noise. A CRUD application focused on the psychology of productivity.",
      image: bill,
      tech: "Firebase / React / CSS",
    },
        {
      id: "04",
      title: "RITS Restaurant Suite",
      description: "Stripping away the noise. A CRUD application focused on the psychology of productivity.",
      image: res,
      tech: "Firebase / React / CSS",
    },
  ];

  return (
    <section id="projects" className=" text-white py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Artistic Vertical Header */}
        <div className="flex items-baseline gap-4 mb-32">
          <h2 className="text-5xl md:text-[4rem] font-black uppercase leading-none tracking-tighter opacity-70 select-none">
            Projects
          </h2>
  
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 group`}
            >
              
              {/* Image Container with Custom "Cut" Frame */}
              <div className="relative w-full md:w-3/5 aspect-[16/9] overflow-hidden bg-zinc-900 group-hover:rounded-tr-[100px] transition-all duration-700 ease-in-out">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
                />

                {/* Overlay Number */}
                {/* <span className="absolute bottom-4 left-4 text-6xl font-black text-white/20 outline-text group-hover:text-purple-500/50 transition-colors">
                  {project.id}
                </span> */}
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/5 space-y-6 z-10">
                <div className="h-px w-24 bg-purple-500 group-hover:w-full transition-all duration-700"></div>
                
                <h3 className="text-5xl font-light italic serif tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                  "{project.description}"
                </p>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Tech Stack</span>
                  <span className="text-sm font-mono text-purple-400">{project.tech}</span>
                </div>

                <button className="mt-4 px-8 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-bold">
                  View Case Study
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="fixed top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}