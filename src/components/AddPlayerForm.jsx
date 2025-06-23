import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPlayerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });

  const isFormValid = formData.name && formData.category && formData.difficulty;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    localStorage.setItem("playerData", JSON.stringify(formData));
    navigate("/quiz/start");
  };

  return (
    <div className="h-auto py-10 flex items-center justify-center px-4 mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 animate-slideUpFade text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400 font-['Orbitron'] drop-shadow-glow">
          Enter the Arena
        </h2>

        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm mb-2 font-semibold">
            Player Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
            placeholder="e.g., Alex"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-sm mb-2 font-semibold"
          >
            Quiz Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="movies">Movies</option>
          </select>
        </div>

        {/* Difficulty Dropdown */}
        <div className="mb-8">
          <label
            htmlFor="difficulty"
            className="block text-sm mb-2 font-semibold"
          >
            Difficulty Level
          </label>
          <select
            name="difficulty"
            id="difficulty"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-semibold text-white tracking-wide transition-all ${
            isFormValid
              ? "bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
