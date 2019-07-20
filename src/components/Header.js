import React from 'react';
import menu from '../assets/Menu.png';
import myreels from '../assets/myreels.png';
import reel from '../assets/reel.png';
import search from '../assets/Search.png';
import star from '../assets/Star.png';

export default function Header() {
    return (
        <header className="header">
                <ul className="header__list">
                    <li className="header__item"><a href="https://github.com/Kaleidics/reel-code-test" >faq</a></li>
                    <li className="header__item"><a href="https://github.com/Kaleidics/reel-code-test" >how reel works</a></li>
                    <li className="header__item"><a href="https://github.com/Kaleidics/reel-code-test" >profile</a></li>
                </ul>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="https://github.com/Kaleidics/reel-code-test" ><img src={menu} className="navigation__image" alt="menu"/></a></li>
                        <li className="navigation__item"><a href="https://github.com/Kaleidics/reel-code-test" ><img src={search} className="navigation__image" alt="search" /></a></li>
                        <li className="navigation__item"><a href="https://github.com/Kaleidics/reel-code-test" ><img src={reel} className="navigation__image" alt="reel" /></a></li>
                        <li className="navigation__item"><a href="https://github.com/Kaleidics/reel-code-test" ><img src={star} className="navigation__image" alt="star" /></a></li>
                        <li className="navigation__item"><a href="https://github.com/Kaleidics/reel-code-test" ><img src={myreels} className="navigation__image" alt="myreels" /></a></li>
                    </ul>
                </nav>
        </header>
    )
}