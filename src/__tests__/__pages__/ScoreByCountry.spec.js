import React from 'react';
import {shallow} from 'enzyme';
import ScoreByCountry from '../../App/Pages/ScoreByCountry';

describe('Score by country page', () => {

    it('renders without crashing', () => {
        shallow(<ScoreByCountry/>);
    });

    it('renders with null peoples', () => {
        shallow(<ScoreByCountry peoples={null}/>);
    });

    it('renders with empty peoples', () => {
        shallow(<ScoreByCountry peoples={[]}/>);
    });
});