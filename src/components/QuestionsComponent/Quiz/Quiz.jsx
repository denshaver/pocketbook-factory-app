import React, { useState } from 'react';
import QuestionList from '../QuestionList/QuestionList';

const Quiz = () => {
  const questions = [
    {
      text: "What special feature allows an PocketBook to be readable even in bright sunlight?",
      options: ["Super battery life", "Glare-free screen", "Bluetooth connectivity", "Waterproof design"],
      correctAnswerIndex: 1,
    },
    {
      text: " How long can an e-reader's battery typically last on a single charge?",
      options: ["Up to 1 week", "Up to 1 month", "Up to 24 hours"],
      correctAnswerIndex: 2,
    },
    {
        text: "What is the name of the function that allows an e-reader to read text aloud to the user?",
        options: ["Audiobook mode", "Text-to-Speech", "Voice Assistant", "AudioNarrator"],
        correctAnswerIndex: 0,
    },
    {
        text: "How many books can e readers store in their memory?",
        options: ["500 books", "1,000 books", "3,000 books or more", "10,000 books"],
        correctAnswerIndex: 1,
    },

    {
        text: "How deep can waterproof PocketBooks go?",
        options: ["5 meters", "10 meters", "30 meters", "They float, no need to go underwater"],
        correctAnswerIndex: 2,
    },
    {
        text: "How does an e-reader allow you to access books from anywhere?",
        options: ["It has a built-in bookstore", "It connects to the cloud", "All answers are right", "It accesses books from a public library"],
        correctAnswerIndex: 0,
    },
    {
        text: "7. Which of the following is NOT a format supported by  e-readers?",
        options: ["PDF", "EPUB", "MP4", "Comic book formats"],
        correctAnswerIndex: 0,
    },
    {
        text: "What is the benefit of choosing a black-and-white screen for your e-reader?",
        options: ["Longer battery life", "Better for graphic novels", "Colorful reading experience", "Faster page turning"],
        correctAnswerIndex: 0,
    },
    {
        text: "9. Which of the following is NOT a key feature of an e-reader?",
        options: ["Lightweight and compact design", "Support for multiple screen sizes", "Built-in video player", "Option to protect with a brand cover"],
        correctAnswerIndex: 0,
    },
    {
        text: "10. What kind of libraries can some e-readers connect to for accessing books?",
        options: ["Private bookstores", "University libraries only", "Public libraries", "Specialty comic book stores"],
        correctAnswerIndex: 0,
    },

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      <h1>Quiz starts here</h1>
      <QuestionList
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      {quizCompleted ? (
        <div>
          <p>Тест завершен. Количество правильных ответов: {correctAnswers}</p>
        </div>
      ) : (
        <button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Закончить' : 'Следующий вопрос'}
        </button>
      )}
    </div>
  );
};

export default Quiz;