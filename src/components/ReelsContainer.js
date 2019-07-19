import React from 'react';
import Reel from './Reel';

export default class ReelsContainer extends React.Component {
    render() {
        return(
            <div className="reelsContainer">
                <Reel />
                <Reel />
                <Reel />
            </div>
        )
    }
}