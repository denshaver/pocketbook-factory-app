import React from 'react';
import Question from '../Question/Question';

const QuestionList = ({ question, onAnswer, handleNextQuestion, currentQuestion, totalQuestions }) => {
  return (
    <div>
      <Question question={question} onAnswer={onAnswer} handleNextQuestion={handleNextQuestion} currentQuestion={currentQuestion} totalQuestions={totalQuestions}/>
    </div>
  );
};

export default QuestionList;