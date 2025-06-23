import { Link } from "react-router-dom";
import quizImage from "../assets/quiz-hero.svg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-around sm:justify-between px-6 md:px-12 pt-36 pb-16 text-white  overflow-x-hidden max-w-screen overflow-hidden mb-8">
      
      <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn mt-6 sm:mt-0">
        <div className="flex items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-['Orbitron']">
          Welcome to <span className="text-blue-400">QBoxx</span>
        </h1>
        <img src="https://img.icons8.com/?size=100&id=kmqexIGAK3DI&format=png&color=000000" alt="" className="w-30 transition-transform duration-500 hover:scale-110"/>
        </div>
        <p className="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
          Test your brain. Challenge your friends. Learn something new every day!
        </p>
        <Link
          to="/quiz"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
        >
          Start Quiz
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={quizImage}
          alt="Quiz Illustration"
          className="w-64 sm:w-80 md:w-full max-w-md animate-qboxxFloatGlow transition-transform duration-500 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Hero;
