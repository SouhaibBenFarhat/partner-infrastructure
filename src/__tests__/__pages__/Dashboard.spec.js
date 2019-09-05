import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../../App/Pages/Dashboard';

describe('Dashboard page', () => {

    it('renders without crashing', () => {
        shallow(<Dashboard/>);
    });

    it('renders with null peoples', () => {
        shallow(<Dashboard peoples={null}/>);
    });

    it('renders with empty peoples', () => {
        shallow(<Dashboard peoples={[]}/>);
    });
});