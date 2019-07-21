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
        this.props.dispatch(setSeedData(seed));
    }

    render() {

        let rawData = [...this.props.seedData];

        //If user enters input, filter the array of reeels and display all values that include the string input
        if (this.props.searchInput) {
            rawData = rawData.filter(reel =>
                reel.name.toLowerCase().includes(this.props.searchInput.toLowerCase())
            );
        }

        //If user's entered input matches exactly to a string in the array,
        //assume it will be the first value in the array as it is closest and display that value only
        if (rawData.length > 0 && rawData[0].name.toLowerCase() === this.props.searchInput.toLowerCase()) {
            rawData = rawData.slice(0,1);
        }


        const reels = rawData.map((reel, index) => {
            return <Reel delay={index/5} data={reel} index={index} key={reel.name} />;
        });

        return <div className="reelsContainer">{ reels }</div>;
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData,
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(ReelsContainer);
