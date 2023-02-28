'use client'

import { TbCandy } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import style from "./navbar.module.css"
import { IconContext } from "react-icons";
import AddPostButton from "../addPost/AddPostButton";

const Navbar = () => {
    const getActivePath = usePathname();
    const activeLink = (url: string) => getActivePath === url ? 'navbar-link-active' : "";


    return (
        <nav className={style.navbar}>
            <ul className={style.nav}>
                <li>
                    <Link href="/" className={`
                        ${style.nav__link}
                        ${style[activeLink("/")]}
                        `}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/recipes" className={`
                        ${style.nav__link}
                        ${style[activeLink("/recipes")]}
                        `}
                    >
                        Recipes
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus" className={`
                        ${style.nav__link}
                        ${style[activeLink("/aboutus")]}
                        `}
                    >
                        About Us
                    </Link>
                </li>
            </ul>  
                <AddPostButton/>
        </nav>
    )
}

export default Navbar;