
import TitleStart from './asked/titleStatrt/titleStart';
import Header from './header/header';
import VideoPlayer from './video/Video';
import style from './appStyle.module.scss';
export const App = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <VideoPlayer/>
        <TitleStart />
      </div>
    </>
  );
};
