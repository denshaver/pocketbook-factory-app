import style from './footer.module.scss';
import {FaFacebookF} from 'react-icons/fa'
import {BsTiktok} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoTelegram} from 'react-icons/bi'
import {ImYoutube} from 'react-icons/im';
import Facebook from '../../img/Facebook.png'
import Instagram  from '../../img/Instagram.png';

export const Footer = () => {
  return (
    <div className={style.conFooter}>
      <div className={style.conTittleFooter}>
        <h3 className={style.tittleFooter}>PocketBook</h3>
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
                <li className={style.itemlist}><a href="/"><img src={Facebook} alt="" /></a> </li>
                <li className={style.itemlist}> <a href="/"><img src={Instagram} alt="" /></a></li>
                <li className={style.itemlist}> <a href="/"><FaTwitter fill='#fff'/></a></li>
                <li className={style.itemlist}> <a href="/"><BsTiktok fill='#fff'/></a></li>
                <li className={style.itemlist}> <a href="/"><ImYoutube fill='#fff'/></a></li>
                <li className={style.itemlist}> <a href="/"><BiLogoTelegram fill='#fff'/></a></li>
            </ul>
      </div>
    </div>
  );
};
