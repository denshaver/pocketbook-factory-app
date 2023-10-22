
import TitleStart from './asked/titleStatrt/titleStart';
import Header from './header/header';
import style from './appStyle.module.scss';
export const App = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <TitleStart />
      </div>
    </>
  );
};
