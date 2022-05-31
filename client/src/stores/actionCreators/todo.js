import { SET_TODO, SET_TODO_DETAIL } from "../actionTypes";
const baseUrl = "http://localhost:3000/todo";

export function getTodos() {
    return async dispatch => {
        try {
            let data = await fetch(baseUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!data.ok) {
                throw new Error(data.statusText);
            }
            data = await data.json();
            dispatch({
                type: SET_TODO,
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function createTodo() {
    return async dispatch => {
        try {
            let data = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!data.ok) {
                throw new Error(data.statusText);
            }
            data = await data.json();
            dispatch({
                type: SET_TODO,
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTodoDetail(id) {
    return async dispatch => {
        try {
            let data = await fetch(`${baseUrl}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!data.ok) {
                throw new Error(data.statusText);
            }
            data = await data.json();
            dispatch({
                type: SET_TODO_DETAIL,
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function updateTodo() {
    return async dispatch => {
        try {
            let data = await fetch(baseUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!data.ok) {
                throw new Error(data.statusText);
            }
            data = await data.json();
            dispatch({
                type: SET_TODO,
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteTodo(){
    return async dispatch => {
        try {
            let data = await fetch(baseUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!data.ok) {
                throw new Error(data.statusText);
            }
            data = await data.json();
            dispatch({
                type: SET_TODO,
                payload: data
            });
        } catch (error) {
            console.log(error)
        }
    }
}