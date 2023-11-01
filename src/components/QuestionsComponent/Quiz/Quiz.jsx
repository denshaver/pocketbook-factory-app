import React, { useState } from 'react';
import { useEffect } from 'react';
import QuestionList from '../QuestionList/QuestionList';
import QuestionCompleted from '../QuestionCompleted/QuestionCompleted';
import style from './Quizstyle.module.scss';

import imgQuiz1 from '../../../img/imgQiuz/imgQuiz1.jpg';
import imgQuiz2 from '../../../img/imgQiuz/imgQuiz2.jpg';
import imgQuiz3 from '../../../img/imgQiuz/imgQuiz3.jpg';
import imgQuiz4 from '../../../img/imgQiuz/imgQuiz4.jpg';
import imgQuiz5 from '../../../img/imgQiuz/imgQuiz5.jpg';
import imgQuiz6 from '../../../img/imgQiuz/imgQuiz6.jpg';
import imgQuiz7 from '../../../img/imgQiuz/imgQuiz7.jpg';
import imgQuiz8 from '../../../img/imgQiuz/imgQuiz8.jpg';
import imgQuiz9 from '../../../img/imgQiuz/imgQuiz9.jpg';
import imgQuiz10 from '../../../img/imgQiuz/imgQuiz10.jpg';

const Quiz = ({ handleReset }) => {
  const questions = [
    {
      text: 'To read something from a smartphone or tablet in the bright sun, you will need patience, and maybe… a solar eclipse. But PocketBook guarantees comfortable reading even in bright sun. What’s the secret? ',
      options: [
        'A) Glare-free E Ink screen',
        'B) Special protection cover',
        '3) Text-to-Speech feature',
        '4) Professional sunscreen',
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 1,
      img: imgQuiz1,
    },
    {
      text: " Reading on PocketBook is like a Spa for your eyes. Why e-reader is considered to be one of the most eye-friendly devices in the world?",
      options: [
        'A) Built-in speaker', 
        'B) Adobe DRM support', 
        'C) Paper-like E Ink screen',
        'D) The screen emits healing vapors'
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 2,
      img: imgQuiz2,
    },
    {
      text: 'Caution: smartphones and tablets can cause dependence on sockets. But PocketBook is so energy efficient that you can easily forget what its charger looks like. How long can the e-reader work on a single battery charge?',
      options: [
        'A) Up to 1 month',
        'B) Less than 1 week',
        'C) More than 1 year',
        'D) 60 exciting books or 0.36 boring',
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 3,
      img: imgQuiz3,
    },
    {
      text: "Read in the bathtub or on the slides of the Water park? It's up to you - the waterproof PocketBook allows you to read almost anywhere. What depth can the device withstand?",
      options: [
        'A) 100 centimeters',
        'B) 2 meters',
        'C) 46 inches',
        'D) 20,000 leagues',
      ],
      correctAnswerIndex: 1,
      numberAnswerIndex: 4,
      img: imgQuiz4
    },

    {
      text: 'Compared to other e-readers, PocketBook is a real audio expert. But one of these audio options is not available on PocketBook. Can you guess which one?',
      options: [
        'A) 6 audio formats support',
        'B) Bluetooth connection',
        'C) Built-in speaker',
        'D) Karaoke book singing ',
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 5,
      img: imgQuiz5
    },
    {
      text: 'Listening to someone read a book aloud is not only pleasant but also very convenient. At any moment, PocketBook can turn from an e-reader into a storyteller. What is the name of this function?      ',
      options: [
        'A) ReadAloud',
        'B) PocketBook Voice',
        'C)  Text-to-Speech',
        'D) Bedtime story mode',
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 6,
      img: imgQuiz6
    },
    {
      text: 'If you want all your books to be always at hand, you need to hire a team of powerlifters or just buy a PocketBook. How many books can the e-reader store?',
      options: [
        'A) More than 3000', 
      'B) More than 300', 
      'C) More than 1000', 
      'D) Depends on the genre'],
      correctAnswerIndex: 0,
      numberAnswerIndex: 7,
      img: imgQuiz7
    },
    {
      text: 'PocketBook is the world champion in the number of formats as it supports 25 formats. Name the type of files that the e-reader does not support.',
      options: [
        'A) Comics & manga formats',
        'B) Book formats',
        'C) Graphic formats',
        'D) Tarot cards formats',
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 8,
      img: imgQuiz8
    },
    {
      text: 'What do PocketBook and Batman have in common? Stylish look and superpowers. As you might remember, PocketBook supports Adobe DRM. But what exactly an e-reader is capable of doing with Adobe DRM?',
      options: [
        'A) Get early access to new books',
        'B) Borrow books in online libraries',
        'C) Buy with a discount',
        'D) Chat with authors',
      ],
      correctAnswerIndex: 1,
      numberAnswerIndex: 9,
      img: imgQuiz9
    },
    {
      text: 'The PocketBook family is so big and diverse that even Marvel would envy it. What screens, besides black and white, are there in the arsenal of PocketBook devices?',
      options: [
        'A) OLED screens',
        'B) LCD screens',
        'C) Color E Ink screens',
        'D) X-ray screens',
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 10,
      img: imgQuiz10
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const totalQuestions = questions.length;

  const handleAnswer = isCorrect => {
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

  return (
    <>
      {quizCompleted ? (
        <>
          <QuestionCompleted
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            handleReset={handleReset}
          />
        </>
      ) : (
        <>
          <div className={style.containerQuiz}>
            <QuestionList
              
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              handleNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestionIndex + 1} // Увеличьте на 1, так как индекс начинается с 0
              totalQuestions={totalQuestions}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
