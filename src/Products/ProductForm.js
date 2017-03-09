import React from 'react';

const initialValues = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: Object.assign({}, initialValues),
      errors: {
        message: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(e){
    console.log(this.state.product)
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState((prevState) => {
      prevState.product[name] = value;
      if(!prevState.product.name){
        var message = " Name is required !"
        return {
          errors: {
            message: message,
          }
        }
      } else {
        return {
          product: prevState.product,
          errors: {},
        }
      }
    })
  }
  handleSave(e){
    if(!this.state.product.name){
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      this.props.onSave(this.state.product);
      this.setState({
        product: Object.assign({}, initialValues),
        errors: {
          message: ""
        }
      })
    }
  }

  render() {
    return (
      <form>
        <h3>Enter a new product</h3>
          <p>
            <label>Name</label><br />
            <input className={this.state.errors.message === " Name is required !" ? 'error' : ''} type="text" name="name" onChange={this.handleChange} value={this.state.product.name} />
            <span style={{color: "red"}}>{this.state.errors.message}</span>
          </p>
          <p>
            <label>Category</label><br />
            <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} />
          </p>
          <p>
            <label>Price</label><br />
            <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price} />
          </p>
          <p>
            <label>In stock?</label><br />
            <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
          </p>
          <input type="submit" value="save" onClick={this.handleSave} />
      </form>
    );
  }
}

export default ProductForm;
