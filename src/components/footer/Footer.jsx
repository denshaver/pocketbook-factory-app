import style from './footer.module.scss';

import Facebook from './Facebook.jpg'

import Instagram  from './Instagram.jpg';
import Twitter from './Twitter.jpg';
import YouTube  from './YouTube.jpg';

import Telegram from './Telegram.jpg';
import tiktok from './tiktok.jpg'
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
      <li className={style.itemlist}> <a href="https://www.youtube.com/@pocketbook_ch/featured"><img src={YouTube} alt="" width="35px" className={style.imgitem}/></a></li>
                {/* <li className={style.itemlist}><a href="https://www.facebook.com/PocketBook"><img src={Facebook} alt=""width="24px"  className={style.imgitem}/></a> </li> */}
                {/* <li className={style.itemlist}> <a href="https://instagram.com/pocketbook.ch?igshid=YmMyMTA2M2Y="><img src={Instagram} alt=""width="24px"  className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="https://twitter.com/pocketbook"><img src={Twitter} alt="" width="24px" className={style.imgitem}/></a></li>
                
                <li className={style.itemlist}> <a href="https://www.tiktok.com/@pocketbook_ch?_t=8aRhihYeUMw&_r=1"><img src={tiktok} alt="" width="24px" className={style.imgitem}/></a></li>
                
                <li className={style.itemlist}> <a href="https://www.youtube.com/@pocketbook_ch/featured"><img src={YouTube} alt="" width="24px" className={style.imgitem}/></a></li>
                <li className={style.itemlist}> <a href="/"><img src={Telegram} alt="" width="24px" className={style.imgitem}/></a></li> */}
            </ul>
      </div>
    </div>
  );
};
