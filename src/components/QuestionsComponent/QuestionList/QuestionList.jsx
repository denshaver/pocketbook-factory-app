import React from 'react';
import Question from '../Question/Question';

const QuestionList = ({ question, onAnswer, handleNextQuestion }) => {
  return (
    <div>
      <Question question={question} onAnswer={onAnswer} handleNextQuestion={handleNextQuestion}/>
    </div>
  );
};

export default QuestionList;