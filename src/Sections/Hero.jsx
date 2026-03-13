import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section 
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hey!, I am
        <br />
        <span className="text-5xl md:text-6xl font-bold text-purple-500 inline-block">
          <TypeAnimation
            sequence={[
              "Anwesha Bandyopadhyay",
              5000,
              "",
              500,
            ]}
            speed={200}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </h1>

      {/* Role */}
      <h2 className="text-2xl text-gray-400 mb-6">
        Front-end Developer
      </h2>

      {/* Description */}
      <p className="max-w-xl text-gray-400 mb-10">
        I craft beautiful, functional digital experiences that bring ideas
        to life. Specializing in modern web development and user-centered design.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">

        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition"
        >
          Get in Touch
        </a>

      </div>

    </section>
  );
}