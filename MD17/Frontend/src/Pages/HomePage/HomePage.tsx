import React from "react";
import HomePageCSS from "./HomePage.module.scss"
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = (() => {
    const {t} = useTranslation();
    
    return (
        <div className={HomePageCSS.homepage__hero}>
            <img className={HomePageCSS.logo} src={logo} width='700'/>
            <NavLink className={HomePageCSS.navLink} to={'/game'}>{t('play')}</NavLink>
        </div>
    )
})

export default HomePage;