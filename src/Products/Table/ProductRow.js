import React from 'react';

class ProductRow extends React.Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete(){
    this.props.onDelete(this.props.product.id);
  }
  render() {
    var name = this.props.product.stocked ? this.props.product.name :
      <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
        <td><button onClick={this.delete}>x</button></td>
      </tr>
    );
  }
}

export default ProductRow;
