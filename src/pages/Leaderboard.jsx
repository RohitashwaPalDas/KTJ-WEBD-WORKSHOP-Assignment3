import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);
  const [sortKey, setSortKey] = useState("score");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
    setEntries(data);
  }, []);

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortKey === "score") return b.score - a.score;
    else return a.totalTime - b.totalTime;
  });

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all leaderboard records?");
    if (confirmDelete) {
      localStorage.removeItem("quizLeaderboard");
      setEntries([]);
    }
  };

  const handleDeleteOne = (index) => {
    const confirmDelete = window.confirm("Delete this record?");
    if (confirmDelete) {
      const updated = [...entries];
      updated.splice(index, 1); // remove that entry
      setEntries(updated);
      localStorage.setItem("quizLeaderboard", JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">🏆 Leaderboard</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setSortKey("score")}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            sortKey === "score"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Sort by Score
        </button>
        <button
          onClick={() => setSortKey("time")}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            sortKey === "time"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Sort by Time
        </button>
        <button
          onClick={handleDeleteAll}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-200"
        >
          🗑️ Clear All
        </button>
      </div>

      {sortedEntries.length === 0 ? (
        <p className="text-center text-gray-400">No attempts yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="py-3 px-4">Player</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4">Time (s)</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {sortedEntries.map((entry, i) => {
                const originalIndex = entries.findIndex(
                  (e) =>
                    e.playerName === entry.playerName &&
                    e.score === entry.score &&
                    e.totalTime === entry.totalTime &&
                    e.date === entry.date
                );

                return (
                  <tr key={i} className="border-b border-gray-700 hover:bg-gray-800 transition">
                    <td className="py-3 px-4">{entry.playerName}</td>
                    <td className="py-3 px-4">
                      {entry.score} / {entry.totalQuestions}
                    </td>
                    <td className="py-3 px-4">{entry.totalTime}</td>
                    <td className="py-3 px-4">{entry.date}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDeleteOne(originalIndex)}
                        className="text-red-400 hover:text-red-600 transition duration-200"
                        title="Delete Record"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
