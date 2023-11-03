import style from './header.module.scss'
import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {BsTiktok} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoTelegram} from 'react-icons/bi'
import {ImYoutube} from 'react-icons/im';
const Header = () => {


    return(
        <>
        <div className={style.conHeader}>
            <h1 className={style.txtTitleHeader}>
                PocketBook
            </h1>

            
            <ul className={style.list}>
                <li className={style.itemlist}><FaFacebookF  fill='#fff'/></li>
                <li className={style.itemlist}><FiInstagram fill='#fff'/></li>
                <li className={style.itemlist}><FaTwitter fill='#fff'/></li>
                <li className={style.itemlist}><BsTiktok fill='#fff'/></li>
                <li className={style.itemlist}><ImYoutube fill='#fff'/></li>
                <li className={style.itemlist}><BiLogoTelegram fill='#fff'/></li>
            </ul>
        </div>

        <h2 className={style.titleWelcome}>Welcome to a special page about a special gadget – PocketBook</h2>
        <p className={style.parHeader}>Watch the video to learn the most important things about PocketBook <br/> e-readers and their capabilities.</p>
        </>
    )
};


export default Header;