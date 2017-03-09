import React from 'react';
import ProductRow from './Table/ProductRow.js';
import ProductTableHeader from './Table/ProductTableHeader.js';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        columnHeader: 'name',
        direction: 'desc'
      }
    };
    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  sortByColumnAndDirection(objectA, objectB){
    //checkout javascript sorting api
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.columnHeader], objectB[this.state.sort.columnHeader]];
    if(this.state.sort.column === 'price') {
      [a, b] = [a, b].map((val) => parseFloat(val.replace(/[^\d.]/g, ''), ''), 10);
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }
  sortProducts(){
    var productsArray = Object.keys(this.props.products).map((p) => this.props.products[p]);
    return productsArray.sort(this.sortByColumnAndDirection);
  }
  handleSort(columnHeader, direction){
    this.setState({
      sort: {
        columnHeader: columnHeader,
        direction: direction
      }
    })
  }
  handleDelete(id){
    this.props.onDelete(id)
  }
  render() {
    var rows = [];
    this.sortProducts().forEach((product) => {
      if (product.name.indexOf(this.props.searchFilter) === -1 || (!product.stocked && this.props.stockOnlyFitler)){
        return;
      }
      rows.push(
        <ProductRow product={product} key={product.id} onDelete={this.handleDelete} />
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader
                onSort={this.handleSort}
                currentSortOption={this.state.sort}
                columnHeader="name"
              />
              <ProductTableHeader
                onSort={this.handleSort}
                currentSortOption={this.state.sort}
                columnHeader="price"
              />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
