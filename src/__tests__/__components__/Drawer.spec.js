import React from 'react';
import {shallow, mount} from 'enzyme';
import Drawer from '../../App/Components/Drawer';
import ListItem from "@material-ui/core/ListItem";
import {MemoryRouter} from 'react-router-dom';

describe('Drawer Component', () => {

    it('renders without crashing props', () => {
        shallow(<Drawer/>);
    });

    it('renders without crashing when open is null', () => {
        shallow(<Drawer open={null}/>);
    });

    it('renders without crashing when open is false', () => {
        shallow(<Drawer open={false}/>);
    });

    it('renders without crashing when open is true', () => {
        shallow(<Drawer open={true}/>);
    });

    it('should render with menu items', () => {
        const wrapper = mount(<MemoryRouter><Drawer/></MemoryRouter>);
        expect(wrapper.find(ListItem).length).toEqual(3);
    })
});

