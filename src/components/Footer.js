import React from 'react';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import pinterest from '../assets/pinterest.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__item"><a className="footer__link" href="#"><img src={instagram} className="footer__image" alt="instagram" /></a></li>
                <li className="footer__item"><a className="footer__link" href="#"><img src={facebook} className="footer__image" alt="facebook" /></a></li>
                <li className="footer__item"><a className="footer__link" href="#"><img src={twitter} className="footer__image" alt="twitter" /></a></li>
                <li className="footer__item"><a className="footer__link" href="#"><img src={youtube} className="footer__image" alt="youtube" /></a></li>
                <li className="footer__item"><a className="footer__link" href="#"><img src={pinterest} className="footer__image" alt="pinterest" /></a></li>
            </ul>
        </footer>
    )
}