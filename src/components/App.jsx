import TitleStart from './asked/titleStatrt/titleStart';

import style from './appStyle.module.scss';

export const App = ({btnhandleSubmit}) => {

  
  return (
    <>
      <div className={style.container}>
        
        <TitleStart />

      </div>
    </>
  );
};
