import React from 'react';
import Question from '../Question/Question';

const QuestionList = ({ question, onAnswer, handleNextQuestion, currentQuestion, totalQuestions }) => {
  return (
    
      <Question question={question} onAnswer={onAnswer} handleNextQuestion={handleNextQuestion} currentQuestion={currentQuestion} totalQuestions={totalQuestions}/>
    
  );
};

export default QuestionList;