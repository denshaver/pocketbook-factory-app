import React from 'react';
import Question from '../Question/Question';

const QuestionList = ({ question, onAnswer }) => {
  return (
    <div>
      <Question question={question} onAnswer={onAnswer} />
    </div>
  );
};

export default QuestionList;