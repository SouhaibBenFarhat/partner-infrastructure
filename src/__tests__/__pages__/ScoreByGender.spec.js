import React from 'react';
import {shallow} from 'enzyme';
import ScoresByGender from '../../App/Pages/ScoresByGender';

it('renders without crashing', () => {
    shallow(<ScoresByGender/>);
});