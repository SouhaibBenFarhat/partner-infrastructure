import Api from "../../Lib/Api";

export default class People {

    static all() {
        return Api.get('api/people.json')
    }
}