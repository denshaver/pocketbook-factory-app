import style from './header.module.scss'
import icons from '../../icons/img23.png'
const Header = () => {


    return(
        <>
        <div className={style.conHeader}>
            <h1>
                PocketBook
            </h1>

            
            <ul className={style.list}>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
                <li className={style.itemlist}><img src={icons} alt="" width="24px" height="24px"/></li>
            </ul>
        </div>

        <h2 className={style.titleWelcome}>Welcome word Instruction</h2>
        </>
    )
};


export default Header;