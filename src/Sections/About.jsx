import anime1 from '../assets/anime1.png';


export default function About() {
    
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
           <h2 className="text-5xl md:text-[4rem] font-black uppercase leading-none tracking-tighter opacity-70 select-none  mb-16">
            About Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I'm a passionate Front-end developer who enjoys building
            clean, modern, and user-friendly digital experiences.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            With more than 6 months of experience working on SaaS products,
            I specialize in React, React Native and modern frontend
            architecture.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy turning complex ideas into simple and beautiful
            interfaces that users love.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <img
            src={anime1}
            alt="about illustration"
            className="w-68 h-68 opacity-90"
          />
        </div>

      </div>
    </section>
  );
}