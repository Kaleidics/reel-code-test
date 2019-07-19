import React from 'react';
import reelimage from '../assets/reelimage.jpg';
import ProgressBar from './ProgressBar';

export default class Reel extends React.Component {
    render() {
        return (
            <div className="reel">
                <ul className="reel__list">
                    <li className="reel__item">
                        <img className="reel__image" src={reelimage} alt="placeholder" />
                    </li>
                    <li className="reel__item">
                        <span className="reel__name">
                            <span className="product">Gucci Shoes<span className="u-font-color-grey u-font-size-small">Limited Edition</span></span>
                            <span><span>$100</span>/<span>$1000</span></span>
                        </span>
                    </li>
                    <li className="reel__item">
                        <button className="btn u-font-size-small">Pause</button>
                    </li>
                </ul>
                <ProgressBar />
            </div>
        );
    }
}