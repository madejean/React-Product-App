import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/App';

test('App component should render as expected', () => {
  const component = shallow(<App />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
