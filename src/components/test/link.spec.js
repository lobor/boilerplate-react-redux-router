import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';

import Link from './../Link'

describe('Test component Link', () => {
	test('render link', () => {
		var component = renderer.create(<Link />);
	  const tree = component.toJSON()
	  expect(tree).toMatchSnapshot()
	})

	test('render link selected', () => {
		var component = renderer.create(<Link href="/" selected regexp />);
	  const tree = component.toJSON()
	  expect(tree).toMatchSnapshot()
	})

	test('render link click', () => {
		var component = renderer.create(<Link href="/" selected regexp />);
		const tree = component.toJSON()
		tree.props.onClick();
	  expect(component).toMatchSnapshot()
	})

	test('render link click with props onClick', () => {
		var toto = false;
		var component = renderer.create(<Link href="/" selected regexp onClick={() => { toto = true }} />);
		const tree = component.toJSON()
		tree.props.onClick();
	  expect(toto).toBe(true)
	})

	test('render link click with props onClick and event', () => {
		var toto = false;
		var component = renderer.create(<Link href="/" selected regexp onClick={() => { toto = true }} />);
		const tree = component.toJSON()
		tree.props.onClick({preventDefault: () => {}, stopPropagation: () => {}, target: { href: false }});
	  expect(toto).toBe(true)
	})
});
