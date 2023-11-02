import style from './footer.module.scss';

import Facebook from '../../img/Facebook.jpg'
import Instagram  from '../../img/Instagram.jpg';
import twitter from '../../img/Twitter.jpg';
import TikTok from '../../img/TikTok.jpg'
import Youtube from '../../img/Youtube.jpg'
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
                <li className={style.itemlist}><a href="/"><img src={Facebook} alt=""width="24px"  className={style.imgitem}/></a> </li>
                <li className={style.itemlist}> <a href="/"><img src={Instagram} alt=""width="24px"  className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={twitter} alt="" width="24px" className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={twitter} alt="" width="24px" className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={TikTok} alt="" width="24px" className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={Youtube} alt="" width="24px" className={style.imgitem}/></a></li>
            </ul>
      </div>
    </div>
  );
};
