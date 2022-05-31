import { SET_TODO,SET_TODO_DETAIL } from "../actionTypes";

const initialState = {
    todos: [],
    todoDetail: {}
};

export default function todoReducers(state = initialState, {type, payload}) {
    switch (type) {
        case SET_TODO:
            return {
                ...state,
                todos: payload
            };
        case SET_TODO_DETAIL:
            return {
                ...state,
                todoDetail: payload
            };
        default:
            return state;
    }
}