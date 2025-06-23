import React from "react";

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Vite",
    logo: "https://vitejs.dev/logo.svg",
  },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-400">📘 About This App</h1>

      <p className="text-lg text-center text-gray-300 mb-10 leading-relaxed">
        <strong className="font-bold text-2xl font-['Orbitron'] text-blue-500">QBoxx</strong> is a quiz app which was built as part of the <strong>Kshitij Web Development and AI Workshop 2025</strong>.
        It challenges users with timed questions, shows personalized feedback, and ranks users with a local leaderboard.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-300">🛠 Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-110"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 mb-2 filter drop-shadow-lg"
            />
            <span className="text-sm text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-3 text-yellow-300">🧠 What I Learned</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-10">
        <li>Managing state using <code>useState</code> and <code>useEffect</code></li>
        <li>Creating reusable components (Quiz, ScoreSummary, Leaderboard)</li>
        <li>Using <code>localStorage</code> to persist user data</li>
        <li>Building responsive layouts with Tailwind CSS</li>
        <li>Enhancing user experience with conditional rendering</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-300">✨ Features Built</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-10">
        <li>Timed questions with countdown and auto timeout</li>
        <li>Score summary with performance insights</li>
        <li>Local leaderboard with sorting by score/time</li>
        <li>Custom motivational messages after each attempt</li>
      </ul>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-3 text-pink-300">😂 Just for Fun</h2>
        <img
          src="https://pbs.twimg.com/media/DkfXCF4W4AA1_Sw.jpg"
          alt="Funny quiz meme"
          className="rounded-lg shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 italic">
        Made with 💻, ☕ and occasional debugging panic.
      </div>
      
    </div>
  );
};

export default About;
