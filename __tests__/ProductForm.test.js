import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductForm from '../src/Products/ProductForm';

test('ProductForm component should render as expected', () => {
  const component = shallow(<ProductForm />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
