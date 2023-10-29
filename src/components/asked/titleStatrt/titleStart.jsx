import React from 'react';
import style from '../titleStatrt/titleStart.module.scss';
import Header from '../../header/header';
import { AspectRatio } from '@chakra-ui/react';
import { Footer } from 'components/footer/Footer';


import Quiz from 'components/QuestionsComponent/Quiz/Quiz';
import { ImgReadContainer } from 'components/readerImg/imgReadContainer/ImgReadContainer';
import { useState } from 'react';

const TitleStart = () => {
    
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
          <AspectRatio maxW="1360px" className={style.video}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              className={style.videoIframe}
            />
          </AspectRatio>
        </div>
        
        <ImgReadContainer/>
        <div className={style.container}>
          <h1 className={style.title}>Quiz starts here</h1>
          <p className={style.par}>Are You an E-Reader Expert?</p>

          <button type="button" className={style.btnStart} onClick={btnhandleSubmit}>
            Get ready
          </button>
          </div>
          <Footer/>
        </>
      )}
   
  </>
  );
};

export default TitleStart;
