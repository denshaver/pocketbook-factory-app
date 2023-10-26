import style from './qustionEnd.module.scss';
import * as React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const QuestionCompleted = ({ correctAnswers, handleReset }) => {
  let message = '';
  let value = 0;
  let tittle = '';
  switch (true) {
    case correctAnswers >= 0 && correctAnswers <= 4:
      message = `Oops, you're an E-Reader Explorer in training! But don't worry, you still get the 'E-Reader Adventurer' award. Keep learning, and you'll become a pro in no time!`;
      value = 10;
      tittle = 'If you got 0-4 correct answers:';
      break;
    case correctAnswers >= 5 && correctAnswers <= 7:
      message = `Not bad, you're an E-Reader Enthusiast! You've earned the "Page-Turner" award. Keep exploring the world of e-reading!`;
      value = 50;
      tittle = 'If you got 5-7 correct answers:';
      break;
    case correctAnswers >= 8 && correctAnswers <= 10:
      message = `Congratulations, you're an E-Reader Extraordinaire! You've unlocked the "Master of the E-Verse" award. Time to celebrate with a good e-book!`;
      value = 100;
      tittle = 'If you got 8-10 correct answers:';
      break;
    default:
      break;
  }

  return (
    <>
      
        <div className={style.containerEnd}>

          <CircularProgress
            value={value}
            size="300px"
            thickness="4px"
            color="#1A2B4F"
            className={style.cricular}
          >
            {/* <CircularProgressLabel>{correctAnswers}</CircularProgressLabel> */}
          </CircularProgress>

          <div>
            <h2 className={style.tittleMessage}>{tittle}</h2>
            <p className={style.messageTxt}>{message}</p>
            <button
              type="button"
              onClick={handleReset}
              className={style.btnAgain}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      
    </>
  );
};

export default QuestionCompleted;
