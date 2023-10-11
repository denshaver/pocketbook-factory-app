import React, { useState } from 'react';
import style from './Question.module.scss';
const Question = ({ question, onAnswer, handleNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionSelect = optionIndex => {
    if (!answered) {
      setSelectedOption(optionIndex);
      const isCorrect = optionIndex === question.correctAnswerIndex;
      onAnswer(isCorrect);
      setAnswered(true);
    }
  };

  const resetQuestion = () => {
    setSelectedOption(null);
    setAnswered(false);
    handleNextQuestion();
  };

  return (
    <div className={style.containerQuestion}>
      <div className={style.conQuesText}>
        <h2 className={style.quesText}>{question.text}</h2>
      </div>
      <div>
        <ul className={style.btnitem}>
          {question.options.map((option, index) => (
            <li key={index} className={style.listBtnItem}>
              <button
                className={`${style.btnQuest} ${
                  answered
                    ? question.correctAnswerIndex === index
                      ? style.correctAnswer
                      : selectedOption === index
                      ? style.wrongAnswer
                      : style.defaultButton
                    : style.defaultButton
                }`}
                onClick={() => handleOptionSelect(index)}
                disabled={answered}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {answered && (
        <div>
          {question.correctAnswerIndex === selectedOption ? (
            <p>Правильно!</p>
          ) : (
            <p>
              Неправильно. Правильный ответ:{' '}
              {question.options[question.correctAnswerIndex]}
            </p>
          )}
        </div>
      )}
      <button onClick={resetQuestion}>Следующий вопрос</button>
    </div>
  );
};

export default Question;
