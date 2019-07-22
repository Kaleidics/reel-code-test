import React from 'react';
import reelimage from '../assets/reelimage.jpg';
import ProgressBar from './ProgressBar';

export default class Reel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.status
        }

        this.toggleStatus = this.toggleStatus.bind(this);
    }

    toggleStatus() {
        this.setState({
            status: this.state.status === "active" ? "paused" : "active"
        });
    }

    render() {
        const reel = this.props.data;
        return (
            <div className="reel" style={{animationDelay: `${this.props.delay}s`}}>
                <ul className="reel__list">
                    <li className="reel__item">
                        <img className="reel__image" src={reelimage} alt="placeholder" />
                    </li>
                    <li className="reel__item">
                        <span className="reel__name u-margin-bottom-smallest">
                            <span className="product"><span className="u-break-long-words">{reel.name}</span><span className="u-font-color-grey u-font-size-small">{reel.status}</span></span>
                            <span className="total">{reel.total}.00 USD</span>
                        </span>
                    </li>
                    <li className="reel__item">
                        <button className="btn u-font-size-small" onClick={this.toggleStatus}>{ this.state.status === "active" ? "Pause" : "Paused"}</button>
                    </li>
                </ul>
                <ProgressBar percent={reel.percentSaved} />
                <div className={ this.state.status === "active" ? "" : "reel__overlay"}></div>
            </div>
        );
    }
}