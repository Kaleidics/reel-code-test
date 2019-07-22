import React from "react";
import { connect } from "react-redux";
import { setSortedData } from "../actions/index";
import { sortData } from "../sortingFunction";

class FilterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: 0
        }
    }

    //chooses whether or not to sort ascending or descening
    handleSort() {
        if (this.state.sortBy === 0) {
            this.setState({
                sortBy: 1
            });
            this.ascending();
        }

        else {
            this.setState({
                sortBy: 0
            });
            this.descending();
        }
    }

    ascending() {
        let sortedData = sortData([...this.props.seedData], this.props.option);
        this.props.dispatch(setSortedData(sortedData));
    }

    //Since it will be always be sorted ascending first, just reverse to get the descending order
    descending() {
        let sortedData = [...this.props.seedData].reverse();
        this.props.dispatch(setSortedData(sortedData));
    }

    render() {
        return (
            <button className="filters__button" onClick={this.handleSort.bind(this)}>
                {this.props.optionName} <span className="filters__toggle" style={{transform: this.state.sortBy ? "rotate(-90deg)" : "rotate(90deg)"}}>&#8249;</span>
            </button>
        );
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData,
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(FilterButton);
