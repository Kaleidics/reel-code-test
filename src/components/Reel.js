import React from 'react';
import { connect } from "react-redux";
import reelimage from '../assets/reelimage.jpg';
import ProgressBar from './ProgressBar';
import { changeReelStatus } from '../actions/index';

class Reel extends React.Component {

    toggleStatus = () => {
        let status = this.props.data.status === "active" ? "paused" : "active";
        console.log('togglestatus', status)
        this.props.toggle(this.props.seedData, this.props.data.name, status);
    };

    render() {
        const reel = this.props.data;
        return (
            <div className="reel" style={{ animationDelay: `${this.props.delay}s` }}>
                <ul className="reel__list">
                    <li className="reel__item">
                        <img className="reel__image" src={reelimage} alt="placeholder" />
                    </li>
                    <li className="reel__item">
                        <span className="reel__name u-margin-bottom-smallest">
                            <span className="product">
                                <span className="u-break-long-words">{reel.name}</span>
                                <span className="u-font-color-grey u-font-size-small">{reel.status}</span>
                            </span>
                            <span className="total">{reel.total}.00 USD</span>
                        </span>
                    </li>
                    <li className="reel__item">
                        <button className={`btn u-font-size-small ${reel.status === "paused" ? "u-make-center u-background-color-white" : ""}`} onClick={this.toggleStatus}>
                            {reel.status === "paused" ? "Activate" : "Pause"}
                        </button>
                    </li>
                </ul>
                <ProgressBar percent={reel.percentSaved} />
                <div className={reel.status === "active" ? "" : "reel__overlay"} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData
});

const mapDispatchToProps = dispatch => {
    return {
        toggle: (currentArray, name, status) => {
            dispatch(changeReelStatus(currentArray, name, status));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reel);