import style from './footer.module.scss';
import {FaFacebookF} from 'react-icons/fa'
import {BsTiktok} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoTelegram} from 'react-icons/bi'
import {ImYoutube} from 'react-icons/im';

export const Footer = () => {
  return (
    <div className={style.conFooter}>
      <div>
        <h3>PocketBook</h3>
      </div>
      <div className={style.conFooterTxt}>
        <h3 className={style.txtfooter}>
          We invite you to familiarize yourself with -{' '}
          <span className={style.spanTxt}>corporate presentation</span>
        </h3>
        <p className={style.parTxt}>2023 PocketBook</p>
      </div>
      <div>
      <ul className={style.list}>
                <li className={style.itemlist}><FaFacebookF  fill='#fff'/></li>
                <li className={style.itemlist}><FiInstagram fill='#fff'/></li>
                <li className={style.itemlist}><FaTwitter fill='#fff'/></li>
                <li className={style.itemlist}><BsTiktok fill='#fff'/></li>
                <li className={style.itemlist}><ImYoutube fill='#fff'/></li>
                <li className={style.itemlist}><BiLogoTelegram fill='#fff'/></li>
            </ul>
      </div>
    </div>
  );
};
