import style from './header.module.scss';
import React from 'react';
import PositionedMenu from './btnLang'




import { useTranslation } from 'react-i18next';




// import { FaFacebookF } from 'react-icons/fa';
// import { BsTiktok } from 'react-icons/bs';
// import { FiInstagram } from 'react-icons/fi';
// import { FaTwitter } from 'react-icons/fa';
// import { BiLogoTelegram } from 'react-icons/bi';
// import { ImYoutube } from 'react-icons/im';
const Header = () => {
  const {t} = useTranslation();





  
  return (
    <>
    

    <div className={style.conHeader}>
        <h1 className={style.txtTitleHeader}>PocketBook</h1>
        
        <PositionedMenu/>
        
        {/* <ul className={style.list}>
          <li className={style.itemlist}>
            <FaFacebookF fill="#fff" />
          </li>
          <li className={style.itemlist}>
            <FiInstagram fill="#fff" />
          </li>
          <li className={style.itemlist}>
            <FaTwitter fill="#fff" />
          </li>
          <li className={style.itemlist}>
            <BsTiktok fill="#fff" />
          </li>
          <li className={style.itemlist}>
            <ImYoutube fill="#fff" />
          </li>
          <li className={style.itemlist}>
            <BiLogoTelegram fill="#fff" />
          </li>
        </ul> */}
      </div>
      
      <div className={style.conTextTittle}>
        <h2 className={style.titleWelcome}>
          {t('titleWelcome')}
          {/* Welcome to a special page about a special gadget – PocketBook */}
        </h2>
        <p className={style.parHeader}>
         {t('parHeader')}
        </p>
      </div>


    
      
    </>
  );
};

export default Header;
