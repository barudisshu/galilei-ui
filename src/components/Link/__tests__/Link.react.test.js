// MLink.react.test.js
import React from 'react';
import { MLink } from '../Link.react';
import renderer from 'react-test-renderer';

test('MLink changes the class when hovered', () => {
  const component = renderer.create(
    <MLink page="http://www.facebook.com">Facebook</MLink>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
