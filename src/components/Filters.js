import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <button className="filters__button">
                    Name<span className="filters__toggle">&#8249;</span>
                </button>
                <button className="filters__button">
                    Status<span className="filters__toggle">&#8249;</span>
                </button>
                <button className="filters__button">
                    Percent<span className="filters__toggle">&#8249;</span>
                </button>
                <button className="filters__button">
                    Price<span className="filters__toggle">&#8249;</span>
                </button>
            </div>
        );
    }
}