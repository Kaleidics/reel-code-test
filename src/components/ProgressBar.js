import React from 'react';

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div class="progress">
                <div class="progress__bar shadow u-overlay-1" ><span className="progress__percent">90%</span></div>
            </div>
        );
    }
}