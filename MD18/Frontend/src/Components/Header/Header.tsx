import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCSS from "./Header.module.scss"
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";

const Header = (() =>{
    const {t, i18n} = useTranslation();
    const changeLanguage =((language:string) =>{
        i18n.changeLanguage(language)
    })

    return (
    <div className={HeaderCSS.header}>
        <img className={HeaderCSS.logo} src={logo} width='100'/>
        <span className={HeaderCSS.header__nav}>
           <NavLink className={HeaderCSS.navLink} to={'/'}>{t('home')}</NavLink>
           <NavLink className={HeaderCSS.navLink} to={'/game'}>{t('game')}</NavLink>
           <NavLink className={HeaderCSS.navLink} to={'/scoreboard'}>{t('scoreboard')}</NavLink>
        </span>
        <span>
            <button onClick={() => changeLanguage('en')}>En</button>
            <button onClick={() => changeLanguage('lv')}>Lv</button>
            <button onClick={() => changeLanguage('rus')}>Rus</button>
        </span>
    </div>
    )
})

export default Header