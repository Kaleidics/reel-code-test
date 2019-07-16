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
                    <li className="header__item">faq</li>
                    <li className="header__item">How Reel Works</li>
                    <li className="header__item">Profile</li>
                </ul>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item"><img src={menu} className="navigation__image" /></li>
                        <li className="navigation__item"><img src={search} className="navigation__image" /></li>
                        <li className="navigation__item"><img src={reel} className="navigation__image" /></li>
                        <li className="navigation__item"><img src={star} className="navigation__image" /></li>
                        <li className="navigation__item"><img src={myreels} className="navigation__image" /></li>
                    </ul>
                </nav>
        </header>
    )
}