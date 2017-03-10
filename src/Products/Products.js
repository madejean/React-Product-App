import React from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable.js';

export var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Piano'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Violon'},
  '3': {id: 3, category: 'Furniture', price: '$11,000', stocked: false, name: 'Sofa'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Dresser'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$300', stocked: true, name: 'TV'}
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      searchFilter: '',
      stockOnlyFitler: false
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }
  handleFilter(filterInput){
    this.setState(filterInput);
  }
  save(product){
    this.setState((prevState) => {
      var products = prevState.products;
      products[product.id] = product;
      return {products};
    })
  }
  delete(productId){
    this.setState((prevState) => {
      var products = prevState.products;
      delete products[productId];
      return { products };
    })
  }
  render() {
    return (
      <div>
        <Filters
          searchFilter={this.state.searchFilter}
          stockOnlyFitler={this.state.stockOnlyFitler}
          onFilter={this.handleFilter}
        />
        <ProductTable
          products={PRODUCTS}
          searchFilter={this.state.searchFilter}
          stockOnlyFitler={this.state.stockOnlyFitler}
          onDelete={this.delete}
        />
        <ProductForm
          onSave={this.save}
        />
      </div>
    );
  }
}

export default Products;
