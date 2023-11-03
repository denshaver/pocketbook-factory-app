import style from './footer.module.scss';

import Facebook from '../../img/Facebook.jpg'
import Instagram  from '../../img/Instagram.jpg';
import twitter from '../../img/Twitter.jpg';
import TikTok from '../../img/Tiktok.jpg'
import Youtube from '../../img/YouTube.jpg'
import Telegram from '../../img/Telegram.jpg'
export const Footer = () => {
  return (
    <div className={style.conFooter}>
      <div className={style.conTittleFooter}>
        <h3 className={style.tittleFooter}>PocketBook</h3>
      </div>
      <div className={style.conFooterTxt}>
        <h3 className={style.txtfooter}>
          We invite you to familiarize yourself with -{' '}
          <span className={style.spanTxt}><a href="https://presentation.pocketbook.ch" className={style.linkCorp}>corporate presentation</a></span>
        </h3>
        {/* <p className={style.parTxt}>2023 PocketBook</p> */}
        {/* fd */}
      </div>
      <div>
      <ul className={style.list}>
                <li className={style.itemlist}><a href="https://www.facebook.com/PocketBook"><img src={Facebook} alt=""width="24px"  className={style.imgitem}/></a> </li>
                <li className={style.itemlist}> <a href="https://instagram.com/pocketbook.ch?igshid=YmMyMTA2M2Y="><img src={Instagram} alt=""width="24px"  className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="https://twitter.com/pocketbook"><img src={twitter} alt="" width="24px" className={style.imgitem}/></a></li>
                
                <li className={style.itemlist}> <a href="https://www.tiktok.com/@pocketbook_ch?_t=8aRhihYeUMw&_r=1"><img src={TikTok} alt="" width="24px" className={style.imgitem}/></a></li>
                
                <li className={style.itemlist}> <a href="https://www.youtube.com/@pocketbook_ch/featured"><img src={Youtube} alt="" width="24px" className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={Telegram} alt="" width="24px" className={style.imgitem}/></a></li>
            </ul>
      </div>
    </div>
  );
};
