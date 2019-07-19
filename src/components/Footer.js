import React from 'react';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import pinterest from '../assets/pinterest.svg'
import us from '../assets/us.png'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list u-background-color-white">
                <li className="footer__item u-margin-left-medium">
                    <a className="footer__link" href="#">
                        <img src={instagram} className="footer__image" alt="instagram" />
                    </a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="#">
                        <img src={facebook} className="footer__image" alt="facebook" />
                    </a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="#">
                        <img src={twitter} className="footer__image" alt="twitter" />
                    </a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="#">
                        <img src={youtube} className="footer__image" alt="youtube" />
                    </a>
                </li>
                <li className="footer__item u-margin-right-medium">
                    <a className="footer__link" href="#">
                        <img src={pinterest} className="footer__image" alt="pinterest" />
                    </a>
                </li>
            </ul>
            <div className="footer__copyright">
                <span>
                    <img className="footer__icon" src={us} alt="USA" />
                    <p className="footer__geo">United States</p>
                </span>
                <span>&#160; 2019 Reel Code, Test. All rights reserved.</span>
            </div>
            <ul className="footer__list u-font-color-purple u-font-size-small">
                <li className="footer__item"><a className="footer__link">About Us</a></li>
                <li className="footer__item"><a className="footer__link">Careers</a></li>
                <li className="footer__item"><a className="footer__link">Privacy Policy</a></li>
                <li className="footer__item"><a className="footer__link">Terms of Use</a></li>
            </ul>
            <ul className="footer__list u-font-color-purple u-font-size-small">
                <li className="footer__item"><a className="footer__link">FAQ's</a></li>
                <li className="footer__item"><a className="footer__link">Blog</a></li>
                <li className="footer__item"><a className="footer__link">Contact</a></li>
                <li className="footer__item"><a className="footer__link">Coupon & Referral</a></li>
            </ul>
        </footer>
    );
}