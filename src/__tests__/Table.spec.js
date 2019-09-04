import React from "react";
import {create} from "react-test-renderer";
import ScoreTable from "../App/Components/Tables/ScoreTable";
import TableRow from '@material-ui/core/TableRow/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import Faker from 'faker'

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

describe("ScoreTable component", () => {
    test("should render with empty data", () => {
        const scoreTable = create(<ScoreTable peoples={[]}/>);
        expect(scoreTable.toJSON()).toMatchSnapshot();
    });

    test('Rows matches the data', () => {
        const scoreTableInstance = create(<ScoreTable peoples={mockData(10)}/>).root;
        expect(scoreTableInstance.findByType(TableBody).findAllByType(TableRow).length).toBe(mockData(10).length);
    });

    test('Table header match the data', () => {
        const scoreTableInstance = create(<ScoreTable peoples={mockData(10)}/>).root;
        expect(scoreTableInstance.findByType(TableHead).findAllByType(TableCell).length).toBeLessThanOrEqual(Object.keys(mockData(10)[0]).length);
    });

    test('Table should show 20 rows by default', () => {
        const scoreTableInstance = create(<ScoreTable peoples={mockData(1000)}/>).root;
        expect(scoreTableInstance.findByType(TableBody).findAllByType(TableRow).length).toBe(20);
    });
});
