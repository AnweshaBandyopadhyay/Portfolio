export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React Native", level: 80 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">

<h2 className="text-5xl md:text-[4rem] font-black uppercase leading-none tracking-tighter opacity-70 select-none  text-center mb-16">
          Tech Stack
        </h2>

        <div className="space-y-8">

          {skills.map((skill, index) => (
            <div key={index}>

              {/* Skill Name */}
              <div className="flex justify-between mb-2">
                <span className="text-lg">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}