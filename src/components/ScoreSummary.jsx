import React from "react";
import { useEffect } from "react";

const ScoreSummary = ({
  playerName,
  score,
  totalQuestions,
  totalTime,
  onPlayAgain,
  questionTimes,
  selectedAnswers,
  questions,
}) => {
  const percentage = (score / totalQuestions) * 100;
  const fastestIndex = questionTimes.indexOf(Math.min(...questionTimes));

  const hardestQuestions = questions
    .map((q, index) => ({
      question: q.question,
      time: questionTimes[index],
      correct: selectedAnswers[index]?.isCorrect,
    }))
    .filter((q) => !q.correct);

  let message = "";
  if (percentage >= 80) message = "🎉 Quiz Champion!";
  else if (percentage >= 50) message = "👍 Well done!";
  else message = "☕ More caffeine, maybe?";

  useEffect(() => {
    const newEntry = {
      playerName,
      score,
      totalQuestions,
      totalTime,
      date: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];
    stored.push(newEntry);
    localStorage.setItem("quizLeaderboard", JSON.stringify(stored));
  }
, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Score Summary</h2>
      <p className="mb-2 text-lg">
        Player: <strong>{playerName}</strong>
      </p>
      <p className="mb-2 text-lg">
        Score:{" "}
        <strong>
          {score} / {totalQuestions}
        </strong>
      </p>
      <p className="mb-2 text-lg">
        Total Time Taken: <strong>{totalTime} seconds</strong>
      </p>
      <p className="mt-4 italic">{message}</p>

      <div className="text-left mt-6">
        <h3 className="text-xl font-semibold mb-2">Performance Insights:</h3>
        <p>
          ⚡ Fastest Answer: Question {fastestIndex + 1} —{" "}
          {questionTimes[fastestIndex]}s
        </p>
        <p className="mt-2">❌ Questions You Struggled With:</p>
        <ul className="list-disc list-inside text-red-400">
          {hardestQuestions.length === 0 ? (
            <li>None — You nailed it! 🎯</li>
          ) : (
            hardestQuestions.map((q, i) => (
              <li key={i}>
                {q.question} ({q.time}s)
              </li>
            ))
          )}
        </ul>
      </div>

      <button
        onClick={onPlayAgain}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        🔄 Play Again
      </button>
    </div>
  );
};

export default ScoreSummary;
