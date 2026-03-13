export default function NavBar() {
  const links = [
    { name: "Hero", link: "#hero" },
    {name: "About", link: "#about"},
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-purple-400 font-semibold text-lg">
          Anwesha
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-sm text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-purple-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}