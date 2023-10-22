import React, { useState } from 'react';
import { useEffect } from 'react';
import QuestionList from '../QuestionList/QuestionList';
import QuestionCompleted from '../QuestionCompleted/QuestionCompleted';

const Quiz = () => {
  const questions = [
    {
      text: "What special feature allows an PocketBook to be readable even in bright sunlight?",
      options: ["Super battery life", "Glare-free screen", "Bluetooth connectivity", "Waterproof design"],
      correctAnswerIndex: 1,
      numberAnswerIndex: 1,
    },
    {
      text: " How long can an e-reader's battery typically last on a single charge?",
      options: ["Up to 1 week", "Up to 1 month", "Up to 24 hours"],
      correctAnswerIndex: 2,
      numberAnswerIndex: 2
    },
    {
        text: "What is the name of the function that allows an e-reader to read text aloud to the user?",
        options: ["Audiobook mode", "Text-to-Speech", "Voice Assistant", "AudioNarrator"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 3
    },
    {
        text: "How many books can e readers store in their memory?",
        options: ["500 books", "1,000 books", "3,000 books or more", "10,000 books"],
        correctAnswerIndex: 1,
        numberAnswerIndex: 4
    },

    {
        text: "How deep can waterproof PocketBooks go?",
        options: ["5 meters", "10 meters", "30 meters", "They float, no need to go underwater"],
        correctAnswerIndex: 2,
        numberAnswerIndex: 5
    },
    {
        text: "How does an e-reader allow you to access books from anywhere?",
        options: ["It has a built-in bookstore", "It connects to the cloud", "All answers are right", "It accesses books from a public library"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 6
    },
    {
        text: "7. Which of the following is NOT a format supported by  e-readers?",
        options: ["PDF", "EPUB", "MP4", "Comic book formats"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 7
    },
    {
        text: "What is the benefit of choosing a black-and-white screen for your e-reader?",
        options: ["Longer battery life", "Better for graphic novels", "Colorful reading experience", "Faster page turning"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 8
    },
    {
        text: "9. Which of the following is NOT a key feature of an e-reader?",
        options: ["Lightweight and compact design", "Support for multiple screen sizes", "Built-in video player", "Option to protect with a brand cover"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 9
    },
    {
        text: "10. What kind of libraries can some e-readers connect to for accessing books?",
        options: ["Private bookstores", "University libraries only", "Public libraries", "Specialty comic book stores"],
        correctAnswerIndex: 0,
        numberAnswerIndex: 10
    },

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const totalQuestions = questions.length; 

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (!quizCompleted) {
      setCorrectAnswers(0);
    }
  }, [quizCompleted]);
console.log(currentQuestionIndex + 1);
  return (
    <div>
      {quizCompleted ? (
        <>
          <QuestionCompleted />
          <div>
            <p>Тест завершен. Количество правильных ответов: {correctAnswers}</p>
          </div>
        </>
      ) : (
        <QuestionList
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion}
        currentQuestion={currentQuestionIndex + 1} // Увеличьте на 1, так как индекс начинается с 0
        totalQuestions={totalQuestions}
        />
      )}
    </div>
  );
};

export default Quiz;