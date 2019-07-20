import React from 'react';
import { connect } from "react-redux";
import Reel from './Reel';
import { seed } from '../seed';
import { setSeedData } from '../actions/index';

class ReelsContainer extends React.Component {
    //roundabout way to set data to redux store
    //when I am just importing it as static data
    //for coding test purposes requiring the use of redux we are doing it this way
    //normally would expect this to be fetching data asynchronously
    componentDidMount() {
        console.log("in component did mount", seed);
        this.props.dispatch(setSeedData(seed));
    }

    render() {
        console.log("in reelscontainer render", this.props.seedData);

        const reels = this.props.seedData.map((reel, index) => {
            return <Reel data={reel} index={index} key={reel.name} />;
        });

        return <div className="reelsContainer">{reels}</div>;
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData
});

export default connect(mapStateToProps)(ReelsContainer);
