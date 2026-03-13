export default function Contacts() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-10">
          I'm always open to discussing new opportunities,
          interesting projects, or collaborations.
          Feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:your-email@gmail.com"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-md"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition rounded-md"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition rounded-md"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}