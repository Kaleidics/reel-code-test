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
                    <li className="header__item"><a href="#">faq</a></li>
                    <li className="header__item"><a href="#">how reel works</a></li>
                    <li className="header__item"><a href="#">profile</a></li>
                </ul>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#"><img src={menu} className="navigation__image" alt="menu"/></a></li>
                        <li className="navigation__item"><a href="#"><img src={search} className="navigation__image" alt="search" /></a></li>
                        <li className="navigation__item"><a href="#"><img src={reel} className="navigation__image" alt="reel" /></a></li>
                        <li className="navigation__item"><a href="#"><img src={star} className="navigation__image" alt="star" /></a></li>
                        <li className="navigation__item"><a href="#"><img src={myreels} className="navigation__image" alt="myreels" /></a></li>
                    </ul>
                </nav>
        </header>
    )
}