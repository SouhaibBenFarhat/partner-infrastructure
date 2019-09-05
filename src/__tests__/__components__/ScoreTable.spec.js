import React from 'react';
import {shallow, mount} from 'enzyme';
import ScoreTable from '../../App/Components/Tables/ScoreTable';
import Faker from 'faker'
import TableRow from '@material-ui/core/TableRow/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';

const mockData = (size = 10) => {
    const mockData = [];
    for (let i = 0; i < size; i++) {
        mockData.push({
            "id": Faker.random.uuid(),
            "first_name": Faker.name.firstName(),
            "last_name": Faker.name.lastName(),
            "email": Faker.internet.email(),
            "gender": Faker.lorem.slug(),
            "city": Faker.address.city(),
            "country": Faker.address.country(),
            "score": Faker.random.number(),
            "created_at": Faker.date.past()
        })
    }
    return mockData;
};

describe('ScoreTable', () => {

    it('renders without crashing', () => {
        shallow(<ScoreTable peoples={null}/>);
    });

    it('Rows matches the data', () => {
        const wrapper = mount(<ScoreTable peoples={mockData(10)}/>);
        expect(wrapper.find(TableBody).find(TableRow).length).toEqual(10);
    });

    it('Table header match the data', () => {
        const wrapper = mount(<ScoreTable peoples={mockData(10)}/>);
        expect(wrapper.find(TableHead).find(TableCell).length).toBeLessThanOrEqual(Object.keys(mockData(10)[0]).length);
    });

    it('Table should show 20 rows by default', () => {
        const wrapper = mount(<ScoreTable peoples={mockData(100)}/>);
        expect(wrapper.find(TableBody).find(TableRow).length).toBe(20);
    });

});
