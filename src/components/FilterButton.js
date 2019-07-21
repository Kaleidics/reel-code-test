import React from "react";
import { connect } from "react-redux";
import { setSortedData } from "../actions/index";


class FilterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: 0
        }
    }

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
        let sortedData = [...this.props.seedData].sort((a, b) => (a.name > b.name ? 1 : -1));
        this.props.dispatch(setSortedData(sortedData));
    }

    descending() {
        let sortedData = [...this.props.seedData].sort((a, b) => (b.name > a.name ? 1 : -1));
        this.props.dispatch(setSortedData(sortedData));
    }

    render() {
        return (
            <button className="filters__button" onClick={this.handleSort.bind(this)}>
                {this.props.option} <span className="filters__toggle" style={{transform: this.state.sortBy ? "rotate(-90deg)" : "rotate(90deg)"}}>&#8249;</span>
            </button>
        );
    }
}

const mapStateToProps = state => ({
    seedData: state.seedData,
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(FilterButton);
