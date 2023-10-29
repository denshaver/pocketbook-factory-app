import style from './header.module.scss'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import icons from './icons.svg'
const Header = () => {


    return(
        <>
        <div className={style.conHeader}>
            <h1>
                PocketBook
            </h1>

            
            <ul className={style.list}>
                <li className={style.itemlist}><FacebookIcon/></li>
                <li className={style.itemlist}><InstagramIcon/></li>
                <li className={style.itemlist}><TwitterIcon/></li>
                <li className={style.itemlist}><YouTubeIcon/></li>
                <li className={style.itemlist}><TelegramIcon/></li>
                <li className={style.itemlist}>
                    <svg className={style.facebook} width="24px" height="24px">
                  <use href="./icons.svg#icon-facebook"></use>
                </svg></li>
            </ul>
        </div>

        <h2 className={style.titleWelcome}>Welcome word Instruction</h2>
        </>
    )
};


export default Header;