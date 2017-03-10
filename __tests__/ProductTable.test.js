import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductTable from '../src/Products/ProductTable';
import ProductTableHeader from '../src/Products/Table/ProductTableHeader';
import { PRODUCTS } from '../src/Products/Products';

test('ProductTable component should render as expected', () => {
  const component = shallow(<ProductTable products={PRODUCTS}/>)
  const tree = toJson(component)
  expect(component.find(ProductTableHeader).length).toBe(2)
  expect(tree).toMatchSnapshot()
})
