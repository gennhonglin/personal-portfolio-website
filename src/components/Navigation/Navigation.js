import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import resume from "./Resume.pdf";


export default function Navigation() {

    const [hamburger, setHamburger] = useState("navigation__container-hamburger");
    const [menuClick, setMenuClick] = useState(false);
    const [mobileNav, setMobileNav] = useState("navigation__container-mobile-nav")

    const updateMenu = () => {
        if (!menuClick) {
            setHamburger("navigation__container-hamburger is-active");
            setMobileNav("navigation__container-mobile-nav is-active");
            setMenuClick(true);
        } else {
            setHamburger("navigation__container-hamburger");
            setMobileNav("navigation__container-mobile-nav");
            setMenuClick(false);
        }
    }

    return (
        <header className="navigation">
            <div className="navigation__container">
                <h1 className="navigation__container-logo">GHL</h1>
                <nav className="navigation__container-nav">
                    <Link className="navigation__container-nav__link">About</Link>
                    <Link className="navigation__container-nav__link">Projects</Link>
                    <Link className="navigation__container-nav__link">Experience</Link>
                    <a className="navigation__container-nav__link" href={resume} target="_blank">Resume</a>
                    <Link className="navigation__container-nav__link">Contact</Link>
                </nav>
                <button className={hamburger} onClick={updateMenu} >
                    <div className="navigation__container-hamburger__bar"></div>
                </button>
                <nav className={mobileNav}>
                    <Link className="navigation__container-mobile-nav__link">About</Link>
                    <Link className="navigation__container-mobile-nav__link">Projects</Link>
                    <Link className="navigation__container-mobile-nav__link">Experience</Link>
                    <a className="navigation__container-mobile-nav__link" href={resume} target="_blank">Resume</a>
                    <Link className="navigation__container-mobile-nav__link">Contact</Link>
                </nav>
            </div>
        </header>
    )
}