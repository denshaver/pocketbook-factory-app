import TitleStart from './asked/titleStatrt/titleStart';
import Header from './header/header';
import { AspectRatio } from '@chakra-ui/react';
import style from './appStyle.module.scss';

export const App = () => {
  return (
    <>
      <div className={style.container}>
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
        
       
          

          
        
        <TitleStart />
      </div>
    </>
  );
};
