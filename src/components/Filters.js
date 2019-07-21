import React from 'react';
import { connect } from "react-redux";
import FilterButton from "./FilterButton";


class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <FilterButton option={"Name"}/>
                <FilterButton option={"Status"}/>
                <FilterButton option={"Percent"}/>
                <FilterButton option={"Price"}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData,
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(Filters);