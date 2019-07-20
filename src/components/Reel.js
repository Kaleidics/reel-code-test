import React from 'react';
import reelimage from '../assets/reelimage.jpg';
import ProgressBar from './ProgressBar';

export default class Reel extends React.Component {
    render() {
        const reel = this.props.data;
        return (
            <div className="reel">
                <ul className="reel__list">
                    <li className="reel__item">
                        <img className="reel__image" src={reelimage} alt="placeholder" />
                    </li>
                    <li className="reel__item">
                        <span className="reel__name u-margin-bottom-smallest">
                            <span className="product"><span className="u-break-long-words">{reel.name}</span><span className="u-font-color-grey u-font-size-small">{reel.status}</span></span>
                            <span><span>$100</span>/<span>${reel.total}</span></span>
                        </span>
                    </li>
                    <li className="reel__item">
                        <button className="btn u-font-size-small">Pause</button>
                    </li>
                </ul>
                <ProgressBar percent={reel.percentSaved} />
            </div>
        );
    }
}