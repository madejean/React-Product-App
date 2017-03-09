import React from 'react';

class ProductTableHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(e){
    this.props.onSort(this.props.columnHeader, e.target.name)
  }
  render() {
    var currentSortOption = this.props.currentSortOption.columnHeader === this.props.columnHeader ? this.props.currentSortOption.direction : false;
    return(
      <th>
        {this.props.columnHeader}
        <button
          className={currentSortOption === 'asc' ? 'Selected-sort-option' : ''}
          name='asc'
          onClick={this.handleSort}
        >&#x25B2;</button>
        <button
          className={currentSortOption === 'desc' ? 'Selected-sort-option' : ''}
          name='desc'
          onClick={this.handleSort}
        >&#x25BC;</button>
      </th>
    );
  }
}

export default ProductTableHeader;
