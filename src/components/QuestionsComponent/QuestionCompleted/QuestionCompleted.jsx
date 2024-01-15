import style from './qustionEnd.module.scss';
import * as React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { ImgReadContainer } from 'components/readerImg/imgReadContainer/ImgReadContainer';
import { Footer } from 'components/footer/Footer';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const QuestionCompleted = ({ correctAnswers, handleReset, totalQuestions }) => {
  let message = '';
  let value = 0;
  let tittle = '';
  let par = '';

  const { t } = useTranslation();

  switch (true) {
    case correctAnswers >= 0 && correctAnswers <= 4:
      message = t('questionCompleted.answear.better.message');
      value = (correctAnswers / totalQuestions) * 100;
      tittle = t('questionCompleted.answear.better.tittle');
      par = t('questionCompleted.answear.better.par');

      break;
    case correctAnswers >= 5 && correctAnswers <= 7:
      message = t('questionCompleted.answear.good.message');
      value = (correctAnswers / totalQuestions) * 100;
      tittle = t('questionCompleted.answear.good.tittle');
      par = t('questionCompleted.answear.good.par');

      break;
    case correctAnswers >= 8 && correctAnswers <= 10:
      message = t('questionCompleted.answear.excellent.message');
      value = (correctAnswers / totalQuestions) * 100;
      tittle = t('questionCompleted.answear.excellent.tittle');
      par = t('questionCompleted.answear.excellent.par');

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
          <CircularProgressLabel
            top="7%"
            maxW={180}
            className={style.cricularContainerPar}
          >
            <div>
              <p className={style.cricularPar}>{tittle}</p>
            </div>
          </CircularProgressLabel>

          <CircularProgressLabel
            width={73}
            top="43%"
            className={style.cricular}
          >
            <span className={style.totalAnswer}>{correctAnswers}/</span>
            <span className={style.totalAnswer}>{totalQuestions}</span>
          </CircularProgressLabel>
        </CircularProgress>

        <div className={style.conTxtAndBtn}>
          <div className={style.conTextEnd}>
            <h2 className={style.tittleMessage}>{par}</h2>
            <p className={style.messageTxt}>{message}</p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className={style.btnAgain}
          >
            {t('questionCompleted.answear.btnAgain')}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuestionCompleted;
