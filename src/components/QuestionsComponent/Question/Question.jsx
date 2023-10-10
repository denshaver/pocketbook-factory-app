import React, { useState, useEffect  } from 'react';

const Question = ({ question, onAnswer, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  

  // Сброс состояния при изменении вопроса

  useEffect(() => {
    setSelectedOption(null);
    setAnswered(false);
    console.log('useEffect');
  }, [question]);


  const handleOptionSelect = optionIndex => {
    if (!answered) {
      setSelectedOption(optionIndex);
    }


    // Проверяем, правильный ли выбран ответ
    const isCorrect = selectedOption === question.correctAnswerIndex;
    
    // Вызываем колбэк onAnswer с информацией о правильности ответа
    onAnswer(isCorrect);

    // Устанавливаем состояние, что пользователь ответил
    setAnswered(true);
  };

 

  return (
    <div>
      <div>
        <h2>{question.text}</h2>
      </div>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleOptionSelect(index)}
              style={{
                backgroundColor: answered
                  ? question.correctAnswerIndex === index
                    ? 'green' // Правильный ответ
                    : selectedOption === index
                    ? 'red' // Неправильный ответ
                    : 'white' // Не выбран
                  : 'white', // Выбран, но еще не ответил
                color: selectedOption === index ? 'white' : 'black',
              }}
              disabled={answered} // Блокируем кнопки после ответа
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
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
 
    </div>
  );
};

export default Question;
