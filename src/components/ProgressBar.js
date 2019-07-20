import React from 'react';

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress">
                <div className="progress__bar shadow u-overlay-1" ><span className="progress__percent">{this.props.percent}%</span></div>
            </div>
        );
    }
}