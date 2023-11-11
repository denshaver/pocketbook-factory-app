import React from 'react';
import style from '../titleStatrt/titleStart.module.scss';
import Header from '../../header/header';

import { Footer } from 'components/footer/Footer';

import { useTranslation } from 'react-i18next';
import '../../../i18n'


import Quiz from 'components/QuestionsComponent/Quiz/Quiz';
import { ImgReadContainer } from 'components/readerImg/imgReadContainer/ImgReadContainer';
import { useState } from 'react';

import MyVideoPlayer from '../../video/myVideoPlayer'



const TitleStart = () => {
 
  const { t} = useTranslation();

    const [showQuestions, setShowQuestions] = useState(false);

    const btnhandleSubmit = () => {
      
      setShowQuestions(true);
    }

 
const handleReset = () => {
  setShowQuestions(false);
}
  return (
    <>
   
    
      {showQuestions ? (
        <>
        <div className={style.containerQuiz}>

          <Quiz  handleReset={handleReset}/> 
          
        </div>
        
        </>
        

      ) : (
        <>
         <Header />
        <div className={style.conVideo}>
          <MyVideoPlayer/>
        </div>
        
        <ImgReadContainer/>
        <div className={style.container}>
          <h1 className={style.title}>{t('title')}</h1>
          <p className={style.par}>{t('par')}</p>

          <button type="button" className={style.btnStart} onClick={btnhandleSubmit}>
            {t('btnStart')} 
          </button>
          </div>
          <Footer/>
        </>
      )}
   
  </>
  );
};

export default TitleStart;
