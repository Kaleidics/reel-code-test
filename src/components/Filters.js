import React from 'react';
import { connect } from "react-redux";
import FilterButton from "./FilterButton";


class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <FilterButton optionName={"Name"} option={"name"} />
                <FilterButton optionName={"Status"} option={"status"} />
                <FilterButton optionName={"Percent"} option={"percentSaved"} />
                <FilterButton optionName={"Price"} option={"total"} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData,
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(Filters);