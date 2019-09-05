import React from 'react';
import {shallow, mount} from 'enzyme';
import Title from '../../App/Components/Charts/Title';

describe('Title component', () => {
    it('renders without crashing', () => {
        shallow(<Title/>);
    });

    it('renders with the correct children', () => {
        const wrapper = mount(<Title><p>Foo</p></Title>);
        expect(wrapper.text()).toEqual('Foo');
    });
});