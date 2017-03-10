import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Filters from '../src/Products/Filters';

test('Filters component should render as expected', () => {
  const component = shallow(<Filters />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
