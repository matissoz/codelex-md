import { NavLink } from "react-router-dom";
import './header.scss'

const Header = (() =>{
    return (
    <div className="header">
        <span className="logo__wrapper">
            <svg width="30" height="40"viewBox="0 0 53 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.569336 12.4911C0.569336 8.11879 0.569336 5.93265 1.42024 4.26265C2.16872 2.79369 3.36302 1.59938 4.83199 0.850904C6.50198 0 8.68813 0 13.0604 0H45.8495C48.3479 0 49.5972 0 50.5514 0.486231C51.3909 0.913931 52.0733 1.59639 52.501 2.4358C52.9872 3.39008 52.9872 4.63931 52.9872 7.13776V62.2323C52.9872 66.6046 52.9872 68.7908 52.1363 70.4607C51.3879 71.9297 50.1936 73.124 48.7246 73.8725C47.0546 74.7234 44.8685 74.7234 40.4962 74.7234H13.0604C8.68812 74.7234 6.50198 74.7234 4.83199 73.8725C3.36302 73.124 2.16872 71.9297 1.42024 70.4607C0.569336 68.7908 0.569336 66.6046 0.569336 62.2323V12.4911Z" fill="#FBDAD3"/>
                <path d="M24.3605 41.4077C25.5398 39.7313 28.0182 39.7313 29.1975 41.4077L44.6343 63.3512C46.018 65.3181 44.6157 68.0323 42.2158 68.0323H11.3421C8.94231 68.0323 7.54001 65.3181 8.92364 63.3512L24.3605 41.4077Z" fill="url(#paint0_linear_4_604)"/>
                <path d="M29.1976 33.3165C28.0183 34.9928 25.5399 34.9928 24.3606 33.3165L8.92377 11.3729C7.54014 9.40604 8.94244 6.69187 11.3423 6.69187L42.216 6.69187C44.6158 6.69187 46.0181 9.40604 44.6345 11.3729L29.1976 33.3165Z" fill="url(#paint1_linear_4_604)"/>
                <defs>
                <linearGradient id="paint0_linear_4_604" x1="26.779" y1="49.0726" x2="26.779" y2="57.4371" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC0A2"/>
                <stop offset="1" stop-color="#FDA67B"/>
                </linearGradient>
                <linearGradient id="paint1_linear_4_604" x1="26.7791" y1="17.8446" x2="26.7791" y2="26.7668" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC0A2"/>
                <stop offset="1" stop-color="#FDA67B"/>
                </linearGradient>
                </defs>
            </svg>
            <span className="logo__text ">
                BLOG
            </span>
        </span>
        <span className="navLink__wrapper">
           <NavLink className="navLink" to={'/'}>Home</NavLink>
           <NavLink className="navLink" to={'/blog'}>Blog</NavLink>
           <NavLink className="navLink" to={'/createpost'}>Create</NavLink>
           <NavLink className="navLink" to={'/about'}>About</NavLink>
        </span>
    </div>
    )
})

export default Header