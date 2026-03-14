export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Title */}
        {/* Artistic Vertical Header */}
        
<h2 className="text-5xl md:text-[4rem] font-black uppercase leading-none tracking-tighter opacity-70 select-none text-center mb-16">
            Experience
          </h2>

        <div className="relative border-l border-slate-700 pl-10">

          {/* Dot */}
          <div className="absolute -left-2.5 top-2 w-5 h-5 bg-purple-500 rounded-full"></div>

          {/* Content */}
          <div className="mb-10">

            <h3 className="text-2xl font-semibold">
              Frontend Developer
            </h3>

            <span className="text-purple-400 text-sm">
              Aug 2025 — Present
            </span>

            <h4 className="text-gray-300 mt-2">
              Revappayya IT Services Private Limited
            </h4>

            <ul className="mt-4 text-gray-400 space-y-2 list-disc pl-5">

              <li>
                Worked on multiple SaaS products including web and mobile applications.
              </li>

              <li>
                Built responsive interfaces using React and Tailwind CSS.
              </li>

              <li>
                Developed mobile features using React Native.
              </li>

              <li>
                Collaborated with backend and product teams to ship scalable features.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}