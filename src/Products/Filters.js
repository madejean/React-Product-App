import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value']
    const name = e.target.name;
    this.props.onFilter({
      [name] : value
    })
  }
  render() {
    return (
      <form className="Filters-container">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchFilter}
          name="searchFilter"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            name="stockOnlyFitler"
            checked={this.props.stockOnlyFitler}
            onChange={this.handleChange}
          />
          Only Show products in stock
        </p>
      </form>
    );
  }
}

export default Filters;
