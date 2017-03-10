import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductTableHeader from '../src/Products/Table/ProductTableHeader';

test('ProductTableHeader component should render as expected', () => {
  var currentSortOption = {
    sort: {
    columnHeader: 'name',
    direction: 'desc'
    }
  }
  const component = shallow(<ProductTableHeader currentSortOption={currentSortOption} columnHeader="price" />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
