import PeopleService from '../../App/Services/PeopleService'

const mockData = [
    {"id": "1", "country": "CN", "score": 10},
    {"id": "2", "country": "PK", "score": 10},
    {"id": "3", "country": "CN", "score": 10},
    {"id": "4", "country": "BR", "score": 10}
];

describe("People service ", () => {
    test('uniqueBy should filter data and remove duplications', () => {
        const peopleService = new PeopleService();
        expect(peopleService.uniqueBy(mockData, 'country').length).toBe(3);
    });

    test('People service scoreByAttribute should return the correct structure with the correct data.', () => {
        const dataSet = new PeopleService(mockData).scoreByAttribute('country');
        expect(Object.keys(dataSet[0]).length).toBe(2);
        expect(Object.keys(dataSet[0])).toEqual(['country', 'score']);
        expect(dataSet.filter(element => element.country === 'CN')[0].score).toEqual(10);
    });
});
