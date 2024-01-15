import React, { useState } from 'react';
import { useEffect } from 'react';
import QuestionList from '../QuestionList/QuestionList';
import QuestionCompleted from '../QuestionCompleted/QuestionCompleted';
import style from './Quizstyle.module.scss';

import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

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
  const { t } = useTranslation();

  const questions = [
    {
      text: t('qestion.qesOne.text'),
      options: [
        t('qestion.qesOne.options.A'),
        t('qestion.qesOne.options.B'),
        t('qestion.qesOne.options.C'),
        t('qestion.qesOne.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 1,
      img: imgQuiz1,
    },
    {
      text: t('qestion.qesTwo.text'),
      options: [
        t('qestion.qesTwo.options.A'),
        t('qestion.qesTwo.options.B'),
        t('qestion.qesTwo.options.C'),
        t('qestion.qesTwo.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 2,
      img: imgQuiz2,
    },
    {
      text: t('qestion.qesThree.text'),
      options: [
        t('qestion.qesThree.options.A'),
        t('qestion.qesThree.options.B'),
        t('qestion.qesThree.options.C'),
        t('qestion.qesThree.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 3,
      img: imgQuiz3,
    },
    {
      text: t('qestion.qesfour.text'),
      options: [
        t('qestion.qesfour.options.A'),
        t('qestion.qesfour.options.B'),
        t('qestion.qesfour.options.C'),
        t('qestion.qesfour.options.D'),
      ],
      correctAnswerIndex: 1,
      numberAnswerIndex: 4,
      img: imgQuiz4,
    },

    {
      text: t('qestion.qesfive.text'),
      options: [
        t('qestion.qesfive.options.A'),
        t('qestion.qesfive.options.B'),
        t('qestion.qesfive.options.C'),
        t('qestion.qesfive.options.D'),
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 5,
      img: imgQuiz5,
    },
    {
      text: t('qestion.qesSix.text'),
      options: [
        t('qestion.qesSix.options.A'),
        t('qestion.qesSix.options.B'),
        t('qestion.qesSix.options.C'),
        t('qestion.qesSix.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 6,
      img: imgQuiz6,
    },
    {
      text: t('qestion.qesSeven.text'),
      options: [
        t('qestion.qesSeven.options.A'),
        t('qestion.qesSeven.options.B'),
        t('qestion.qesSeven.options.C'),
        t('qestion.qesSeven.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 7,
      img: imgQuiz7,
    },
    {
      text: t('qestion.qesEight.text'),
      options: [
        t('qestion.qesEight.options.A'),
        t('qestion.qesEight.options.B'),
        t('qestion.qesEight.options.C'),
        t('qestion.qesEight.options.D'),
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 8,
      img: imgQuiz8,
    },
    {
      text: t('qestion.qesNine.text'),
      options: [
        t('qestion.qesNine.options.A'),
        t('qestion.qesNine.options.B'),
        t('qestion.qesNine.options.C'),
        t('qestion.qesNine.options.D'),
      ],
      correctAnswerIndex: 1,
      numberAnswerIndex: 9,
      img: imgQuiz9,
    },
    {
      text: t('qestion.qesTen.text'),
      options: [
        t('qestion.qesTen.options.A'),
        t('qestion.qesTen.options.B'),
        t('qestion.qesTen.options.C'),
        t('qestion.qesTen.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 10,
      img: imgQuiz10,
    },
  ];

  const questionsNine = [
    {
      text: t('qestion.qesOne.text'),
      options: [
        t('qestion.qesOne.options.A'),
        t('qestion.qesOne.options.B'),
        t('qestion.qesOne.options.C'),
        t('qestion.qesOne.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 1,
      img: imgQuiz1,
    },
    {
      text: t('qestion.qesTwo.text'),
      options: [
        t('qestion.qesTwo.options.A'),
        t('qestion.qesTwo.options.B'),
        t('qestion.qesTwo.options.C'),
        t('qestion.qesTwo.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 2,
      img: imgQuiz2,
    },
    {
      text: t('qestion.qesThree.text'),
      options: [
        t('qestion.qesThree.options.A'),
        t('qestion.qesThree.options.B'),
        t('qestion.qesThree.options.C'),
        t('qestion.qesThree.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 3,
      img: imgQuiz3,
    },
    {
      text: t('qestion.qesfour.text'),
      options: [
        t('qestion.qesfour.options.A'),
        t('qestion.qesfour.options.B'),
        t('qestion.qesfour.options.C'),
        t('qestion.qesfour.options.D'),
      ],
      correctAnswerIndex: 1,
      numberAnswerIndex: 4,
      img: imgQuiz4,
    },

    {
      text: t('qestion.qesfive.text'),
      options: [
        t('qestion.qesfive.options.A'),
        t('qestion.qesfive.options.B'),
        t('qestion.qesfive.options.C'),
        t('qestion.qesfive.options.D'),
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 5,
      img: imgQuiz5,
    },
    {
      text: t('qestion.qesSix.text'),
      options: [
        t('qestion.qesSix.options.A'),
        t('qestion.qesSix.options.B'),
        t('qestion.qesSix.options.C'),
        t('qestion.qesSix.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 6,
      img: imgQuiz6,
    },
    {
      text: t('qestion.qesSeven.text'),
      options: [
        t('qestion.qesSeven.options.A'),
        t('qestion.qesSeven.options.B'),
        t('qestion.qesSeven.options.C'),
        t('qestion.qesSeven.options.D'),
      ],
      correctAnswerIndex: 0,
      numberAnswerIndex: 7,
      img: imgQuiz7,
    },
    {
      text: t('qestion.qesEight.text'),
      options: [
        t('qestion.qesEight.options.A'),
        t('qestion.qesEight.options.B'),
        t('qestion.qesEight.options.C'),
        t('qestion.qesEight.options.D'),
      ],
      correctAnswerIndex: 3,
      numberAnswerIndex: 8,
      img: imgQuiz8,
    },
    {
      text: t('qestion.qesNine.text'),
      options: [
        t('qestion.qesNine.options.A'),
        t('qestion.qesNine.options.B'),
        t('qestion.qesNine.options.C'),
        t('qestion.qesNine.options.D'),
      ],
      correctAnswerIndex: 2,
      numberAnswerIndex: 9,
      img: imgQuiz10,
    },
  ];

  useEffect(() => {
    if (i18n.language === 'pl' || i18n.language === 'cz') {
      setCurrentQuestions(questionsNine);
    } else {
      setCurrentQuestions(questions);
    }
  }, []);

  const [currentQuestions, setCurrentQuestions] = useState(questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const totalQuestions = currentQuestions.length;

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
              question={currentQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              handleNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
