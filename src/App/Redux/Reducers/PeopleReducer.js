import {SET_PEOPLES} from "../ActionTypes/PeopleActionTypes";

const initialState = {
    peoples: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PEOPLES: {
            return {
                ...state,
                peoples: [...action.peoples]
            };
        }
        default:
            return state;
    }
}
