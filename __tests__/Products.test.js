import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Products from '../src/Products/Products';

test('Products component should render as expected', () => {
  const component = shallow(<Products />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
