import React from "react";
import { connect } from "react-redux";
import { setSearchInput } from '../actions/index';

class SearchInput extends React.Component {

    handleSearch(searchInput) {
        this.props.dispatch(setSearchInput(searchInput));
    }

    render() {
        return (
            <form className="form" onSubmit={e => e.preventDefault()}>
                <label className="form__label" htmlFor="search">Search</label>
                <input id="search" className="form__input" type="search" name="search" onChange={ e => this.handleSearch(e.target.value)} />
            </form>
        );
    }
}

const mapStateToProps = state => ({
    searchInput: state.searchInput
});

export default connect(mapStateToProps)(SearchInput);