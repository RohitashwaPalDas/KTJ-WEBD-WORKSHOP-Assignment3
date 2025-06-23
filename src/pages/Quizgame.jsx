import React, { useEffect, useState } from "react";
import questionsData from "../data/questions";
import ScoreSummary from "../components/ScoreSummary"; // Ensure path is correct

const Quiz = () => {
  const playerDataString = localStorage.getItem('playerData');
  const playerData = JSON.parse(playerDataString);
  const category = playerData.category;
  const difficulty = playerData.difficulty;
  const playerName = playerData.name || "Anonymous";

  const questions = questionsData[category][difficulty];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(15);
  const [showAnswer, setShowAnswer] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [questionTimes, setQuestionTimes] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (quizFinished) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleTimeout();
          return 15;
        }
        return prev - 1;
      });
      setTotalTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, quizFinished]);



  const handleOptionClick = (option) => {
    if (selectedAnswers[currentQuestionIndex]) return;

    const isCorrect = option === currentQuestion.answer;
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);

    setQuestionTimes((prev) => [...prev, timeTaken]);

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: {
        selected: option,
        correct: currentQuestion.answer,
        isCorrect,
      },
    }));
    setShowAnswer(true);

    setTimeout(() => {
      setShowAnswer(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setTimer(15);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  const handleTimeout = () => {
    if (!selectedAnswers[currentQuestionIndex]) {
      const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
      setQuestionTimes((prev) => [...prev, timeTaken]);

      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: {
          selected: null,
          correct: currentQuestion.answer,
          isCorrect: false,
        },
      }));

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizFinished(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setTimer(15);
      setShowAnswer(false);
    }
  };

  const handlePlayAgain = () => {
    window.location.reload(); // or navigate to home/start screen
  };

  const correctAnswers = Object.values(selectedAnswers).filter(ans => ans.isCorrect).length;

  if (quizFinished) {
    return (
      <ScoreSummary
        playerName={playerName}
        score={correctAnswers}
        totalQuestions={questions.length}
        totalTime={totalTime}
        onPlayAgain={handlePlayAgain}
        questionTimes={questionTimes}
        selectedAnswers={selectedAnswers}
        questions={questions}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-20">
      <h2 className="text-xl font-semibold mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="text-lg mb-6">{currentQuestion.question}</p>

      <ul className="space-y-4">
        {currentQuestion.options.map((opt, idx) => {
          const answerData = selectedAnswers[currentQuestionIndex];
          const isSelected = answerData?.selected === opt;
          const isCorrect = opt === currentQuestion.answer;
          const isWrong = isSelected && !isCorrect;

          let base = "w-full p-3 rounded-lg text-left font-medium transition-all duration-200 cursor-pointer";
          let styles = "bg-gray-700 hover:bg-gray-600";

          if (showAnswer || answerData) {
            if (isCorrect) styles = "bg-green-600";
            else if (isWrong) styles = "bg-red-600";
            else if (isSelected) styles = "border-2 border-white";
          }

          return (
            <li
              key={idx}
              className={`${base} ${styles}`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-md text-white ${
            currentQuestionIndex === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Back
        </button>
        <div className="text-lg">⏳ {timer}s</div>
      </div>

      <div className="mt-6">
        <progress
          className="w-full h-3 rounded bg-gray-700"
          value={currentQuestionIndex + 1}
          max={questions.length}
        ></progress>
      </div>
    </div>
  );
};

export default Quiz;
