import style from './qustionEnd.module.scss';
import * as React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { ImgReadContainer } from 'components/readerImg/imgReadContainer/ImgReadContainer';
const QuestionCompleted = ({ correctAnswers, handleReset, totalQuestions }) => {
  let message = '';
  let value = 0;
  let tittle = '';
  switch (true) {
    case correctAnswers >= 0 && correctAnswers <= 4:
      message = `You are a true Jedi Master of this quiz, showing exceptional knowledge of the PocketBook universe`;
      value = 10;
      tittle = 'Try Better';
      break;
    case correctAnswers >= 5 && correctAnswers <= 7:
      message = `You have done well, young Padawan, but there is still much to learn about the PocketBook Force`;
      value = 50;
      tittle = 'Good';
      break;
    case correctAnswers >= 8 && correctAnswers <= 10:
      message = `You might need more training with the Ewoks before becoming a PocketBook Jedi. Keep learning!`;
      value = 100;
      tittle = 'Excellent';
      break;
    default:
      break;
  }

  return (
    <>
     <div className={style.quesComplatedbackground}>
        <ImgReadContainer />
      </div>
      
      <div className={style.containerEnd}>
        <CircularProgress
          value={value}
          size="300px"
          thickness="4px"
          color="#1A2B4F"
          className={style.cricular}
          display="flex"
        >
          <p className={style.cricularPar}>{tittle}</p>
          <CircularProgressLabel width={73} top="43%" className={style.cricular}>
            <span className={style.totalAnswer}>{correctAnswers}/</span>
            <span className={style.totalAnswer}>{totalQuestions}</span>
          </CircularProgressLabel>
        </CircularProgress>

        <div className={style.conTxtAndBtn}>
          <div className={style.conTextEnd}>
            {/* <h2 className={style.tittleMessage}>{tittle}</h2> */}
            <p className={style.messageTxt}>{message}</p>
          </div>

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
