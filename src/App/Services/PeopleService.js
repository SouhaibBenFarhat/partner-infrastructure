export default class PeopleService {

    constructor(peoples) {
        this.peoples = peoples || [];
        this.dataSet = {};
    }

    orderBy(prop) {
        return this.peoples.sort((a, b) => {
                if (a[prop] === null) {
                    return 1;
                }
                if (b[prop] === null) {
                    return -1
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
                if (a[prop] > b[prop]) {
                    return 1;
                }
                return 0;
            }
        )
    }

    uniqueBy(arr, prop) {
        return arr.reduce((a, d) => {
            if (!a.includes(d[prop]) && d[prop]) {
                a.push(d[prop]);
            }
            return a;
        }, []);
    }

    scoreByAttribute(attr) {
        const set = this.uniqueBy(this.peoples, attr);
        set.forEach((entry) => {
            this.peoples
                .filter(people => people[attr] === entry)
                .forEach((people) => {
                    this.dataSet[entry] = (this.dataSet[entry] || 0) + people.score
                })
        });
        const dataSet = this.convertToChartSet(this.dataSet, attr);
        return this.appendAverage(dataSet, set, attr).sort((a, b) => {
                return parseFloat(b.score) - parseFloat(a.score);
            }
        );
    }

    convertToChartSet(dataSet, attr) {
        return Object.keys(dataSet).map((key) => {
            return {[attr]: key, score: dataSet[key]}
        })
    }

    appendAverage(dataSet, dimension, attr) {
        dimension.forEach((dim) => {
            let occurrences = this.peoples.reduce((n, person) => {
                return n + (person[attr] === dim);
            }, 0);
            const target = dataSet.find(element => element[attr] === dim);
            target.score = (target.score / occurrences).toFixed(2)
        });
        return dataSet;
    }
}