import React from 'react';

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress">
                <div className="progress__bar u-overlay-1" style={{width: `${this.props.percent}%` }} >
                    <span className="progress__percent" style={{ color: this.props.percent < 50 ? "#FFF" : "#0A0A0A"}}>{this.props.percent}%</span>
                </div>
            </div>
        );
    }
}