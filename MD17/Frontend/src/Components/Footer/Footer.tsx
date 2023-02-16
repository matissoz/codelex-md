import React from "react";
import { NavLink } from "react-router-dom";
import FooterCSS from "./Footer.module.scss"
import logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Footer = (() =>{
    const {t, i18n} = useTranslation();
    
    return (
    <div className={FooterCSS.footer}>
        <img className={FooterCSS.logo} src={logo} width='100'/>
        <ul className={FooterCSS.footer__nav}>
           <li><NavLink className={FooterCSS.navLink} to={'/'}>{t('home')}</NavLink></li>
           <li><NavLink className={FooterCSS.navLink} to={'/game'}>{t('game')}</NavLink></li>
           <li><NavLink className={FooterCSS.navLink} to={'/scoreboard'}>{t('scoreboard')}</NavLink></li>
        </ul>
    </div>
    )
})

export default Footer;