import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductRow from '../src/Products/Table/ProductRow';
import { PRODUCTS } from '../src/Products/Products';


test('ProductRow component should render as expected', () => {
  var product = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Piano'},
  }
  const component = shallow(<ProductRow product={product}/>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
